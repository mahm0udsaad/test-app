import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { TestProvider } from './context.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <TestProvider>
      <App />
    </TestProvider> 
  </React.StrictMode>,
)
