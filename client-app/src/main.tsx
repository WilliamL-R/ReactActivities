import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './app/layout/App'

import 'semantic-ui-css/semantic.min.css'


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
