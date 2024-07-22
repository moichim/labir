import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './components/App'
import { ThermalProvider } from '../src/context/thermalManagerContext'
import { ThermalManager } from '@labir/core'

import * as workerpool from "workerpool";

const manager = new ThermalManager( workerpool.pool(), {
  palette: "iron"
} );

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThermalProvider pool={workerpool.pool()} options={{palette: "jet"}} externalManagerInstance={manager}>
        <App />
    </ThermalProvider>
  </React.StrictMode>,
)
