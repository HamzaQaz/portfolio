import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'motion/react'
import './index.css'
import App from './App.tsx'
import People from './pages/People.tsx'
import Noise from './components/Noise.tsx'
import PageTransition from './components/PageTransition.tsx'

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <div className="min-h-screen bg-background text-foreground relative">
      <Noise />
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<PageTransition><App /></PageTransition>} />
          <Route path="/people" element={<PageTransition><People /></PageTransition>} />
        </Routes>
      </AnimatePresence>
    </div>
  );
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <AnimatedRoutes />
    </BrowserRouter>
  </StrictMode>,
)
