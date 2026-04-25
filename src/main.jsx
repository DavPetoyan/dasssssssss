import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import ShopPage from "./pages/ShopPage.jsx"
import ContactPage from "./pages/ContactPage.jsx"

{/* <App /> */}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<App />}/>
      <Route path='/shop' element={<ShopPage />}/>
      <Route path='/contact' element={<ContactPage />}/>
    </Routes>
    </BrowserRouter>
  </StrictMode>,
)
