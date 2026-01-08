// src/index.ts
import './index.css'
import { defaultThemes, MonthlyTheme } from './types'

export { MonthDecorProvider, useMonthDecor } from './MonthDecorProvider'
export type { MonthlyTheme } from './types'
export { defaultThemes, SVG_ICONS } from './types'

// Función helper
export function getCurrentMonthTheme(): MonthlyTheme {
  const month = new Date().getMonth()
  return defaultThemes[month] || defaultThemes[0]
}