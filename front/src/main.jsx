import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { LanguageProvider } from './utils/LangConfig.jsx'
import 'primereact/resources/themes/saga-green/theme.css'
import 'primeicons/primeicons.css'
import './index.css'

const root = createRoot(document.getElementById('root'))
root.render(
  <LanguageProvider>
    <StrictMode>
      <App />
    </StrictMode>
  </LanguageProvider>
)