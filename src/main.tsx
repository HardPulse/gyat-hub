import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'

// Default to dark theme to match the Gyat Panel design
if (typeof document !== 'undefined') {
  document.documentElement.classList.add('dark');
}

createRoot(document.getElementById("root")!).render(<App />);
