import { MonthDecorProvider } from '../src'

function App() {
  return (
    <MonthDecorProvider
      repeat={40}
      sizeRange={[8, 20]}
      durationRange={[10, 20]}
      // forceMonth={new Date().getMonth()} // Para el mes actual
      forceMonth={1} // Febrero con corazones
    >
      <div style={{
        minHeight: '100vh',
        background: 'linear-gradient(135deg, #e0f2fe 0%, #f0f9ff 100%)',
        padding: '2rem',
        fontFamily: 'system-ui, sans-serif'
      }}>
        <h1 style={{
          fontSize: '2.5rem',
          fontWeight: 'bold',
          textAlign: 'center',
          marginBottom: '2rem',
          color: '#1e3a8a'
        }}>
          react-monthly-themes Demo
        </h1>
        
        <div style={{
          maxWidth: '42rem',
          margin: '0 auto',
          padding: '2rem',
          background: 'rgba(255, 255, 255, 0.7)',
          backdropFilter: 'blur(10px)',
          borderRadius: '1rem',
          boxShadow: '0 10px 25px rgba(0, 0, 0, 0.1)'
        }}>
          <h2 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>
            Decoración mensual activa
          </h2>
          <p style={{ marginBottom: '1rem' }}>
            Actualmente visualizando: <strong>Febrero ❤️</strong>
          </p>
          <p>
            Los corazones flotantes representan el mes de febrero. 
            Cada mes tiene iconos y colores diferentes.
          </p>
          
          <div style={{ marginTop: '2rem', padding: '1rem', background: '#f8fafc', borderRadius: '0.5rem' }}>
            <h3 style={{ fontSize: '1.25rem', marginBottom: '0.5rem' }}>
              Prueba otros meses:
            </h3>
            <p style={{ fontSize: '0.9rem', color: '#64748b' }}>
              Cambia <code>forceMonth</code> en el código para ver diferentes meses:
              <br/>
              0=Enero ❄️, 1=Febrero ❤️, 2=Marzo ☘️, etc.
            </p>
          </div>
        </div>
      </div>
    </MonthDecorProvider>
  )
}

export default App