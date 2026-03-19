import { Navigate, Route, Routes } from "react-router-dom"
import HomePage from "./components/user/HomePage";
import MenuPage from "./components/user/MenuPage";
import ContactPage from "./components/user/ContactPage";

export default function App() {
  return(
    <main>
      <Routes>
        <Route path="/" element={<Navigate to={"/Home"}/>}/>
        <Route path="Home" element={<HomePage/>}/>
        <Route path="Menu" element={<MenuPage/>}/>
        <Route path="Contacts" element={<ContactPage/>}/>
      </Routes>
    </main>
  )
}