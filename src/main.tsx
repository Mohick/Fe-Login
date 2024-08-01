import React from 'react'
import ReactDOM from 'react-dom/client'
import ControllerRouter from './Router/Router'
import './index.css'
import { BrowserRouter } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      {/* Add your routes here */}
      <ControllerRouter />
    </BrowserRouter>
  </React.StrictMode>,
)
