import { Soup, ListOrdered } from "lucide-react"

export default function SideBar() {
  return(
    <nav className="bg-[#191c1b] w-70 min-h-screen py-4 ">
      <h1 className="text-2xl font-bold text-orange-500 px-4">Pojangmacha</h1>
      <div className="text-white text-lg mt-12 flex flex-col gap-4 px-2">
        <div className="flex items-center gap-4 hover:bg-gray-300 hover:text-black px-2 py-1 rounded-md cursor-pointer">
          <Soup size={22}/>
          <span>Food</span>
        </div>
        <div className="flex items-center gap-4 hover:bg-gray-300 hover:text-black px-2 py-1 rounded-md cursor-pointer">
          <ListOrdered size={22}/>
          <span>Order</span>
        </div>
      </div>
    </nav>
  )
}