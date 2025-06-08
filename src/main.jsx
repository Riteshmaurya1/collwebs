import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

import { register } from './serviceWorkerRegistration'; // ✅ THIS LINE

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
// Register the service worker
register(); // ✅ THIS LINE