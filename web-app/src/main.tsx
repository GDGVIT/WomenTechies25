import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import Navbar from "../components/Navbar"
// import ReactDOM from "react-dom/client"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Tracks from "../pages/tracks.tsx"
createRoot(document.getElementById('root')!).render(
  <StrictMode>
        <Navbar />
  <Router>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/tracks" element={<Tracks />} />
    </Routes>
  </Router>
  </StrictMode>,
)
