import { ShoppingBasket } from "lucide-react";
import { NavLink } from "react-router-dom";

export default function Header() {
  const navBase = "pb-1 border-b-2 border-transparent";
  const navActive = "text-orange-500 border-orange-500 underline";

  return (
    <header className="flex items-center justify-between">
      <h1 className="text-2xl font-bold text-orange-500">Pojangmacha</h1>

      <div className="flex items-center gap-6 text-lg text-gray-500">
        <NavLink to="/Home" className={({ isActive }) => `${navBase} ${isActive ? navActive : ""}`}>home</NavLink>
        <NavLink to="/Menu" className={({ isActive }) => `${navBase} ${isActive ? navActive : ""}`}>menu</NavLink>
        <NavLink to="/Contacts" className={({ isActive }) => `${navBase} ${isActive ? navActive : ""}`}>contact us</NavLink>
      </div>

      <div className="flex items-center gap-6">
        <ShoppingBasket size={30} />
        <button className="border px-6 py-1 rounded-3xl">Sign In</button>
      </div>
    </header>
  );
}