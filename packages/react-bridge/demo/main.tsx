import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './components/App'
import { ThermalProvider } from '../src/context/thermalManagerContext'
import { ThermalManager } from '@labir/core'

const manager = new ThermalManager( {
  palette: "iron"
} );

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThermalProvider options={{palette: "jet"}} externalManagerInstance={manager}>
        <App />
    </ThermalProvider>
  </React.StrictMode>,
)
