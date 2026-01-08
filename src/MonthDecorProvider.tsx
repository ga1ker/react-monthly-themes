import { createContext, useContext, useEffect, useMemo, useState, ReactNode } from 'react'
import type { CSSProperties } from 'react'
import { MonthlyTheme, defaultThemes } from './types'

type Props = {
  children: ReactNode
  repeat?: number
  sizeRange?: [number, number]
  durationRange?: [number, number]
  customThemes?: Record<number, Partial<MonthlyTheme>>
  disableAutoMonthUpdate?: boolean
  forceMonth?: number // Para testing o forzar un mes
}

type ContextValue = {
  currentMonth: number
  currentTheme: MonthlyTheme
  repeat: number
  setMonth: (month: number) => void
}

const MonthDecorContext = createContext<ContextValue | null>(null)

export function MonthDecorProvider({ 
  children, 
  repeat = 70,
  sizeRange = [4, 14] as [number, number],
  durationRange = [8, 15] as [number, number],
  customThemes,
  disableAutoMonthUpdate = false,
  forceMonth
}: Props) {
  const [currentMonth, setCurrentMonth] = useState(() => 
    forceMonth !== undefined ? forceMonth : new Date().getMonth()
  )

  // Actualizar mes automáticamente
  useEffect(() => {
    if (disableAutoMonthUpdate || forceMonth !== undefined) return
    
    const updateMonth = () => setCurrentMonth(new Date().getMonth())
    
    updateMonth() // Actualizar inmediatamente
    const interval = setInterval(updateMonth, 3600000) // Cada hora
    
    return () => clearInterval(interval)
  }, [disableAutoMonthUpdate, forceMonth])

  // Combinar temas default con custom
  const themes = useMemo(() => {
    const mergedThemes = { ...defaultThemes }
    
    if (customThemes) {
      Object.entries(customThemes).forEach(([month, customTheme]) => {
        const monthNum = parseInt(month)
        if (mergedThemes[monthNum]) {
          mergedThemes[monthNum] = {
            ...mergedThemes[monthNum],
            ...customTheme
          }
        }
      })
    }
    
    return mergedThemes
  }, [customThemes])

  const currentTheme = themes[currentMonth] || themes[0]

  const value: ContextValue = { 
    currentMonth, 
    currentTheme, 
    repeat,
    setMonth: setCurrentMonth 
  }

  return (
    <MonthDecorContext.Provider value={value}>
      {children}
      <ParticleOverlay 
        repeat={repeat}
        sizeRange={sizeRange}
        durationRange={durationRange}
        theme={currentTheme}
      />
    </MonthDecorContext.Provider>
  )
}

export function useMonthDecor() {
  const context = useContext(MonthDecorContext)
  if (!context) throw new Error('useMonthDecor debe usarse dentro de MonthDecorProvider')
  return context
}

interface ParticleOverlayProps {
  repeat: number
  sizeRange: [number, number]
  durationRange: [number, number]
  theme: MonthlyTheme
}

function ParticleOverlay({ repeat, sizeRange, durationRange, theme }: ParticleOverlayProps) {
  const [minSize, maxSize] = sizeRange
  const [minDuration, maxDuration] = durationRange
  
  // Detectar tema oscuro/claro del sistema
  const [isDark, setIsDark] = useState(false)
  
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)')
    const updateTheme = (e: MediaQueryListEvent | MediaQueryList) => {
      setIsDark(e.matches)
    }
    
    updateTheme(mediaQuery)
    mediaQuery.addEventListener('change', updateTheme)
    
    return () => mediaQuery.removeEventListener('change', updateTheme)
  }, [])

  const particles = Array.from({ length: repeat })

  // Ajustar color según tema oscuro/claro
  const getAdjustedColor = (color: string) => {
    if (!isDark) return color
    
    // Aclarar colores en modo oscuro para mejor contraste
    try {
      const hex = color.replace('#', '')
      if (hex.length === 3) {
        const r = parseInt(hex[0] + hex[0], 16)
        const g = parseInt(hex[1] + hex[1], 16)
        const b = parseInt(hex[2] + hex[2], 16)
        const factor = 1.3
        const newR = Math.min(255, Math.floor(r * factor))
        const newG = Math.min(255, Math.floor(g * factor))
        const newB = Math.min(255, Math.floor(b * factor))
        return `rgb(${newR}, ${newG}, ${newB})`
      } else if (hex.length === 6) {
        const r = parseInt(hex.substr(0, 2), 16)
        const g = parseInt(hex.substr(2, 2), 16)
        const b = parseInt(hex.substr(4, 2), 16)
        const factor = 1.3
        const newR = Math.min(255, Math.floor(r * factor))
        const newG = Math.min(255, Math.floor(g * factor))
        const newB = Math.min(255, Math.floor(b * factor))
        return `rgb(${newR}, ${newG}, ${newB})`
      }
    } catch {
      // Si hay error, devolver color original
    }
    return color
  }

  return (
    <div style={{
      pointerEvents: 'none',
      position: 'fixed',
      top: 0,
      right: 0,
      bottom: 0,
      left: 0,
      zIndex: 9999,
      overflow: 'hidden'
    }}>
      {particles.map((_, i) => {
        const left = Math.random() * 100
        const size = minSize + Math.random() * (maxSize - minSize)
        const duration = minDuration + Math.random() * (maxDuration - minDuration)
        const delay = Math.random() * -duration
        const initialOpacity = (theme.opacity || 0.7) * (0.5 + Math.random() * 0.5)
        const sway = 10 + Math.random() * 30
        const rotate = Math.random() * 360
        const startY = -10 - Math.random() * 50
        
        const animationClass = theme.animationType === 'spin-fall' 
          ? 'month-decor-spin-fall'
          : theme.animationType === 'float'
          ? 'month-decor-float'
          : 'month-decor-fall'

        const adjustedColor = getAdjustedColor(theme.color)

        return (
          <div
            key={i}
            className={`month-decor-particle ${animationClass}`}
            style={{
              '--month-decor-sway': `${sway}px`,
              '--month-decor-opacity': initialOpacity,
              '--month-decor-duration': `${duration}s`,
              '--month-decor-delay': `${delay}s`,
              '--month-decor-color': adjustedColor,
              '--month-decor-start-rotate': `${rotate}deg`,
              '--month-decor-size': `${size}px`,
              position: 'absolute',
              left: `${left}%`,
              top: `${startY}px`,
              width: `${size}px`,
              height: `${size}px`,
              transform: `rotate(${rotate}deg)`,
            } as CSSProperties}
            dangerouslySetInnerHTML={{ 
              __html: theme.icon.replace(/currentColor/g, adjustedColor) 
            }}
          />
        )
      })}
    </div>
  )
}