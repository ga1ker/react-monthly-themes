// demo/main.tsx
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import '../src/index.css' // Importar los estilos de la librería

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)