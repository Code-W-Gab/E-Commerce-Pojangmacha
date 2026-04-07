import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {BrowserRouter} from 'react-router-dom'
import App from './App.jsx'
import {Toaster} from 'react-hot-toast'
import { CartProvider } from './context/CartContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <CartProvider>
      <BrowserRouter>
        <App/>
        <Toaster/>
      </BrowserRouter>
    </CartProvider>
  </StrictMode>,
)
