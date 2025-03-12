import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { App2 } from './App2.jsx'
import UsingProps from './UsingProps.jsx'
import TableComp from './TableComp.jsx'
import 'bootstrap/dist/css/bootstrap.css'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <App2 />
    <UsingProps />
    <TableComp />
  </StrictMode>,
)
