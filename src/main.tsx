import './index.css'
import App from './App.tsx'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { GbaProvider } from 'react-gbajs'

try {
  console.log('Starting React app...')
  createRoot(document.getElementById('root')!).render(
    <StrictMode>
      <GbaProvider>
        <App />
      </GbaProvider>
    </StrictMode>,
  )
  console.log('React app rendered successfully')
} catch (error) {
  console.error('Error rendering React app:', error)
  document.getElementById('root')!.innerHTML = `
    <div style="padding: 20px; color: red; font-family: Arial;">
      <h1>Error Loading App</h1>
      <p>${error}</p>
    </div>
  `
}
