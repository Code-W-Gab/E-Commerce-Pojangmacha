import { Soup, ListOrdered } from "lucide-react";
import { NavLink } from "react-router-dom";

export default function SideBar() {
  const navClass = ({ isActive }) =>
    `flex items-center gap-4 px-2 py-1 rounded-md cursor-pointer ${
      isActive ? "bg-gray-300 text-black" : "text-white hover:bg-gray-300 hover:text-black"
    }`;

  return (
    <nav className="bg-[#191c1b] w-70 min-h-screen py-4">
      <h1 className="text-2xl font-bold text-orange-500 px-4">Pojangmacha</h1>
      <div className="text-lg mt-12 flex flex-col gap-4 px-2">
        <NavLink to="/Admin/Food" className={navClass}>
          <Soup size={22} />
          <span>Food</span>
        </NavLink>
        <NavLink to="/Admin/Order" className={navClass}>
          <ListOrdered size={22} />
          <span>Order</span>
        </NavLink>
      </div>
    </nav>
  );
}