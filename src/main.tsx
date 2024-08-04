import React, { Suspense } from 'react'
import ReactDOM from 'react-dom/client'
import ControllerRouter from './Router/Router'
import { BrowserRouter } from 'react-router-dom'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Suspense>
        <ControllerRouter />
      </Suspense>
    </BrowserRouter>
  </React.StrictMode>,
)
