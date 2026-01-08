// types.ts
export interface MonthlyTheme {
  particleClass: string
  color: string
  icon: string // SVG como string
  animationType?: 'fall' | 'float' | 'spin-fall'
  opacity?: number
}

export const SVG_ICONS = {
  snowflake: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m10 20-1.25-2.5L6 18m4-14L8.75 6.5 6 6m8 14 1.25-2.5L18 18M14 4l1.25 2.5L18 6"/><path d="m17 21-3-6h-4m7-12-3 6 1.5 3M2 12h6.5L10 9m10 1-1.5 2 1.5 2"/><path d="M22 12h-6.5L14 15M4 10l1.5 2L4 14m3 7 3-6-1.5-3M7 3l3 6h4"/></svg>`,
  
  heart: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5"/></svg>`,
  
  clover: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16.17 7.83 2 22m2.02-10a2.827 2.827 0 1 1 3.81-4.17A2.827 2.827 0 1 1 12 4.02a2.827 2.827 0 1 1 4.17 3.81A2.827 2.827 0 1 1 19.98 12a2.827 2.827 0 1 1-3.81 4.17A2.827 2.827 0 1 1 12 19.98a2.827 2.827 0 1 1-4.17-3.81A1 1 0 1 1 4 12m3.83-4.17 8.34 8.34"/></svg>`,
  
  raindrop: `<svg viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z"/>
  </svg>`,
  
  flower: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 5a3 3 0 1 1 3 3m-3-3a3 3 0 1 0-3 3m3-3v1M9 8a3 3 0 1 0 3 3M9 8h1m5 0a3 3 0 1 1-3 3m3-3h-1m-2 3v-1"/><circle cx="12" cy="8" r="2"/><path d="M12 10v12"/><path d="M12 22c4.2 0 7-1.667 7-5-4.2 0-7 1.667-7 5Z"/><path d="M12 22c-4.2 0-7-1.667-7-5 4.2 0 7 1.667 7 5Z"/></svg>`,
  
  sun: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="4"/><path d="M12 2v2"/><path d="M12 20v2"/><path d="m4.93 4.93 1.41 1.41"/><path d="m17.66 17.66 1.41 1.41"/><path d="M2 12h2"/><path d="M20 12h2"/><path d="m6.34 17.66-1.41 1.41"/><path d="m19.07 4.93-1.41 1.41"/></svg>`,
  
  star: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"/></svg>`,
  
  sunflower: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="3"/><path d="M12 16.5A4.5 4.5 0 1 1 7.5 12 4.5 4.5 0 1 1 12 7.5a4.5 4.5 0 1 1 4.5 4.5 4.5 4.5 0 1 1-4.5 4.5m0-9V9m-4.5 3H9m7.5 0H15m-3 4.5V15M8 8l1.88 1.88m4.24 0L16 8m-8 8 1.88-1.88m4.24 0L16 16"/></svg>`,
  
  leaf: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22v-4m-5-6c-1.5 0-4.5 1.5-5 3 3.5 1.5 6 1 6 1-1.5 1.5-2 3.5-2 5 2.5 0 4.5-1.5 6-3 1.5 1.5 3.5 3 6 3 0-1.5-.5-3.5-2-5 0 0 2.5.5 6-1-.5-1.5-3.5-3-5-3 1.5-1 4-4 4-6-2.5 0-5.5 1.5-7 3 0-2.5-.5-5-2-7-1.5 2-2 4.5-2 7-1.5-1.5-4.5-3-7-3 0 2 2.5 5 4 6"/></svg>`,
  
  pumpkin: `<svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24" fill="currentColor"><path d="M240-80v-170q-39-17-68.5-45.5t-50-64.5-31-77T80-520q0-158 112-259t288-101 288 101 112 259q0 42-10.5 83t-31 77-50 64.5T720-250v170zm80-80h40v-80h80v80h80v-80h80v80h40v-142q38-9 67.5-30t50-50 31.5-64 11-74q0-125-88.5-202.5T480-800t-231.5 77.5T160-520q0 39 11 74t31.5 64 50.5 50 67 30zm100-200h120l-60-120zm-80-80q33 0 56.5-23.5T420-520t-23.5-56.5T340-600t-56.5 23.5T260-520t23.5 56.5T340-440m280 0q33 0 56.5-23.5T700-520t-23.5-56.5T620-600t-56.5 23.5T540-520t23.5 56.5T620-440M480-160"/></svg>`,
  
  ghost: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 10h.01M15 10h.01M12 2a8 8 0 0 0-8 8v12l3-3 2.5 2.5L12 19l2.5 2.5L17 19l3 3V10a8 8 0 0 0-8-8"/></svg>`,
  
  snowman: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m10 20-1.25-2.5L6 18m4-14L8.75 6.5 6 6m8 14 1.25-2.5L18 18M14 4l1.25 2.5L18 6"/><path d="m17 21-3-6h-4m7-12-3 6 1.5 3M2 12h6.5L10 9m10 1-1.5 2 1.5 2"/><path d="M22 12h-6.5L14 15M4 10l1.5 2L4 14m3 7 3-6-1.5-3M7 3l3 6h4"/></svg>`
} as const

export const defaultThemes: Record<number, MonthlyTheme> = {
  0: {  // Enero
    particleClass: 'snowflake',
    color: '#e0f2fe',
    icon: SVG_ICONS.snowflake,
    animationType: 'spin-fall',
    opacity: 0.8
  },
  1: {  // Febrero
    particleClass: 'heart',
    color: '#fecaca',
    icon: SVG_ICONS.heart,
    animationType: 'float',
    opacity: 0.7
  },
  2: {  // Marzo
    particleClass: 'clover',
    color: '#86efac',
    icon: SVG_ICONS.clover,
    animationType: 'fall',
    opacity: 0.6
  },
  3: {  // Abril
    particleClass: 'raindrop',
    color: '#93c5fd',
    icon: SVG_ICONS.raindrop,
    animationType: 'fall',
    opacity: 0.5
  },
  4: {  // Mayo
    particleClass: 'flower',
    color: '#fbbf24',
    icon: SVG_ICONS.flower,
    animationType: 'float',
    opacity: 0.7
  },
  5: {  // Junio
    particleClass: 'sun',
    color: '#fef3c7',
    icon: SVG_ICONS.sun,
    animationType: 'spin-fall',
    opacity: 0.6
  },
  6: {  // Julio
    particleClass: 'star',
    color: '#fef3c7',
    icon: SVG_ICONS.star,
    animationType: 'fall',
    opacity: 0.8
  },
  7: {  // Agosto
    particleClass: 'sunflower',
    color: '#fbbf24',
    icon: SVG_ICONS.sunflower,
    animationType: 'float',
    opacity: 0.6
  },
  8: {  // Septiembre
    particleClass: 'leaf',
    color: '#a7f3d0',
    icon: SVG_ICONS.leaf,
    animationType: 'fall',
    opacity: 0.7
  },
  9: {  // Octubre
    particleClass: 'pumpkin',
    color: '#ea580c',
    icon: SVG_ICONS.pumpkin,
    animationType: 'fall',
    opacity: 0.6
  },
  10: { // Noviembre
    particleClass: 'ghost',
    color: '#d8b4fe',
    icon: SVG_ICONS.ghost,
    animationType: 'float',
    opacity: 0.5
  },
  11: { // Diciembre
    particleClass: 'snowman',
    color: '#ffffff',
    icon: SVG_ICONS.snowman,
    animationType: 'fall',
    opacity: 0.8
  }
}