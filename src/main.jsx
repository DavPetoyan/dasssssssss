import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import ShopPage from "./pages/ShopPage.jsx"
import ContactPage from "./pages/ContactPage.jsx"
import Layout from './Layout.jsx'
import Single from './pages/SinglePage.jsx'
import ErrorPage from './pages/ErrorPage.jsx'



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<App />} />
          <Route path='*' element={<ErrorPage />} />
          <Route path='/shop' element={<ShopPage />} />
          <Route path='/contact' element={<ContactPage />} />
          <Route path='/single/:id' element={<Single />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
