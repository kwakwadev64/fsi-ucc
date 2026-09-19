import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './app/App.tsx'
import AppProviders from './app/providers/AppProviders.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <AppProviders>
      <App />
    </AppProviders>
  </React.StrictMode>
)
