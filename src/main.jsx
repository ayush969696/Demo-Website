import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import '@fortawesome/fontawesome-free/css/all.min.css'; 
import '@iconscout/unicons/css/line.css';
import { DarkModeProvider } from './contexts/DarkModeContext.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
     <DarkModeProvider>
      <App />
    </DarkModeProvider>
  </StrictMode>,
)
