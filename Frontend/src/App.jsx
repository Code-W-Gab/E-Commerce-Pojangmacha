import { Navigate, Route, Routes } from "react-router-dom"
import HomePage from "./pages/HomePage"
import MenuPage from "./pages/MenuPage"
import ContactPage from "./pages/ContactPage"
import CartPage from "./pages/CartPage"
import AdminFoodPage from "./pages/AdminFoodPage"
import AdminOrderPage from "./pages/AdminOrderPage"


export default function App() {
  return(
    <main>
      <Routes>
        <Route path="/" element={<Navigate to={"/Home"}/>}/>
        <Route path="/Home" element={<HomePage/>}/>
        <Route path="/Menu" element={<MenuPage/>}/>
        <Route path="/Contacts" element={<ContactPage/>}/>
        <Route path="/Cart" element={<CartPage/>}/>

        <Route path="/Admin/Food" element={<AdminFoodPage/>}/>
        <Route path="/Admin/Order" element={<AdminOrderPage/>}/>
      </Routes>
    </main>
  )
}