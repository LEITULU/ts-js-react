import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import './index.css'
// import App from './App.tsx'
import FuseRef from './FuseRef.tsx'
import FuseMemo from './FuseMemo.tsx'
import FuseCallBack from './FuseCallback.tsx'
import FuseContext from './FuseContext.tsx'
import FuseReducer from './FuseReducer.tsx'
import Ftest1 from './Ftest1.tsx'


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <FuseRef /> <br />
    <FuseMemo /> <br />
    <FuseCallBack /> <br />
    <FuseContext /> <br />
    <FuseReducer /> <br />
    <Ftest1 /> <br />
  </StrictMode>,
)