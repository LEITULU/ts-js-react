import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import './index.css'
import App from './App.tsx'


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)

import Mid1 from './Mid.tsx'
createRoot(document.getElementById('mid1')!).render(
  <StrictMode>
    <Mid1 />
  </StrictMode>,
)

import Hidouki from './Hidouki.tsx'
createRoot(document.getElementById('hidouki')!).render(
  <StrictMode>
    <Hidouki />
  </StrictMode>,
)