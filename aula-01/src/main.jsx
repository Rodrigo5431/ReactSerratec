import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import Time from './components/Time.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App/>
    <Component/>
    <Component2/> */}
    <Time/>

  </StrictMode>,
)
