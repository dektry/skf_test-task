import React from 'react'
import './index.scss'
import App from './App'
import reportWebVitals from './reportWebVitals'
import { createRoot } from 'react-dom/client'

const rootDiv = document.getElementById('root')
if (!rootDiv) throw new Error("The element #root wasn't found")

const root = createRoot(rootDiv)

root.render(
  <React.StrictMode>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </React.StrictMode>
)

reportWebVitals()
