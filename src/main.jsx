import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter basename={window.location.hostname.includes('github.io') ? '/student-foundation' : '/'}>      <App />
    </BrowserRouter>
  </React.StrictMode>,
)
