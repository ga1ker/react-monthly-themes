# react-monthly-themes 🎨

Una librería React ligera y elegante para agregar decoraciones temáticas mensuales a tus aplicaciones. Cada mes tiene iconos SVG únicos, colores y animaciones diferentes.

![Demo](https://img.shields.io/badge/demo-live-success)
![Version](https://img.shields.io/badge/version-1.0.0-blue)
![React](https://img.shields.io/badge/react-18+-61dafb)
![TypeScript](https://img.shields.io/badge/typescript-included-3178c6)
![License](https://img.shields.io/badge/license-MIT-green)

## ✨ Características

- 🗓️ **12 meses temáticos** con iconos SVG únicos
- 🎨 **Colores adaptativos** para modo claro/oscuro
- ✨ **3 tipos de animaciones** (caída, flotante, giratoria)
- 📱 **Totalmente responsive** y optimizado para móviles
- ♿ **Accesible** (respeto a `prefers-reduced-motion`)
- 🎯 **Sin dependencias** externas
- 💪 **TypeScript** incluido
- 🎨 **Personalizable** al 100%

## 📦 Instalación

```bash
npm install react-monthly-themes
# o
yarn add react-monthly-themes
# o
pnpm add react-monthly-themes
```

# Uso Básico

```
import { MonthDecorProvider } from 'react-monthly-themes'

function App() {
  return (
    <MonthDecorProvider>
      <YourApplication />
    </MonthDecorProvider>
  )
}
```

# Personalización

````
<MonthDecorProvider
  repeat={40}                    // Número de partículas
  sizeRange={[8, 20]}           // Tamaño mínimo y máximo (px)
  durationRange={[10, 20]}      // Duración de animación (segundos)
  customThemes={{               // Personalizar temas específicos
    0: {                        // Enero
      color: '#00a8ff',         // Color personalizado
      opacity: 0.9,             // Opacidad
      animationType: 'spin-fall'// Tipo de animación
    }
  }}
  disableAutoMonthUpdate={false}// Desactivar actualización automática
  forceMonth={0}                // Forzar un mes específico (0=Enero)
>
  <YourApplication />
</MonthDecorProvider>
````

# Hook para control

```
import { useMonthDecor } from 'react-monthly-themes'

function MyComponent() {
  const { 
    currentMonth,   // 0-11 (0=Enero, 11=Diciembre)
    currentTheme,   // Tema del mes actual
    setMonth        // Función para cambiar mes
  } = useMonthDecor()

  return (
    <div>
      <h2>Mes actual: {currentMonth + 1}</h2>
      <button onClick={() => setMonth(0)}>Cambiar a Enero</button>
      <div style={{ color: currentTheme.color }}>
        Color del tema: {currentTheme.color}
      </div>
    </div>
  )
}
```

# 📄 API Reference
| Prop | Tipo | Default | Descripción |
|------|------|---------|-------------|
| `children` | `ReactNode` | requerido | Contenido de la aplicación |
| `repeat` | `number` | `30` | Número de partículas |
| `sizeRange` | `[number, number]` | `[8, 20]` | Tamaño mínimo/máximo en px |
| `durationRange` | `[number, number]` | `[10, 20]` | Duración de animación en segundos |
| `customThemes` | `Record<number, Partial<MonthlyTheme>>` | `{}` | Personalización de temas |
| `disableAutoMonthUpdate` | `boolean` | `false` | Desactiva actualización automática |
| `forceMonth` | `number` | `undefined` | Forza un mes específico (0-11) |

# Desarrollo:
```
# Clonar repositorio
git clone https://github.com/tu-usuario/react-monthly-themes.git
cd react-monthly-themes

# Instalar dependencias
npm install

# Ejecutar demo de desarrollo
npm run dev

# Construir librería
npm run build

# Ejecutar tests (si los hay)
npm test
```

# 🤝 Contribuir
```
Las contribuciones son bienvenidas. Por favor:

Fork el proyecto

Crea una rama (git checkout -b feature/AmazingFeature)

Commit tus cambios (git commit -m 'Add AmazingFeature')

Push a la rama (git push origin feature/AmazingFeature)

Abre un Pull Request
```

# 📄 Licencia

```
MIT © Gadiel Alcazar Bernal

Si te gusta este proyecto dale una estrella en GitHub
```
