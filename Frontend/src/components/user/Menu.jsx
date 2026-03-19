import bimbimbowl from "/bimbimbowl.jpg"
import { Plus } from "lucide-react"

export default function Menu() {
  return(
    <menu>
      <h1 className="text-2xl font-bold mb-10">Top Food</h1>
      <div className="grid grid-cols-4 items-center gap-10">
        <div className="bg-white shadow rounded-2xl">
          <div className="relative">
            <img src={bimbimbowl} className="h-50 w-full rounded-tl-2xl rounded-tr-2xl"/>
            <div className="absolute bottom-4 right-3 bg-white rounded-full p-0.5"><Plus size={22}/></div>
          </div>
          <div className="py-4 px-4">
            <h2 className="font-bold">Butter Noodles</h2>
            <p className="text-gray-500 text-xs my-2">Combo Meal with Softdrinks</p>
            <p className="text-orange-500 font-semibold">12php</p>
          </div>
        </div>
      
        <div className="bg-white shadow rounded-2xl">
          <div className="relative">
            <img src={bimbimbowl} className="h-50 w-full rounded-tl-2xl rounded-tr-2xl"/>
            <div className="absolute bottom-4 right-3 bg-white rounded-full p-0.5"><Plus size={22}/></div>
          </div>
          <div className="py-4 px-4">
            <h2 className="font-bold">Butter Noodles</h2>
            <p className="text-gray-500 text-xs my-2">Combo Meal with Softdrinks</p>
            <p className="text-orange-500 font-semibold">12php</p>
          </div>
        </div>

        <div className="bg-white shadow rounded-2xl">
          <div className="relative">
            <img src={bimbimbowl} className="h-50 w-full rounded-tl-2xl rounded-tr-2xl"/>
            <div className="absolute bottom-4 right-3 bg-white rounded-full p-0.5"><Plus size={22}/></div>
          </div>
          <div className="py-4 px-4">
            <h2 className="font-bold">Butter Noodles</h2>
            <p className="text-gray-500 text-xs my-2">Combo Meal with Softdrinks</p>
            <p className="text-orange-500 font-semibold">12php</p>
          </div>
        </div>

        <div className="bg-white shadow rounded-2xl">
          <div className="relative">
            <img src={bimbimbowl} className="h-50 w-full rounded-tl-2xl rounded-tr-2xl"/>
            <div className="absolute bottom-4 right-3 bg-white rounded-full p-0.5"><Plus size={22}/></div>
          </div>
          <div className="py-4 px-4">
            <h2 className="font-bold">Butter Noodles</h2>
            <p className="text-gray-500 text-xs my-2">Combo Meal with Softdrinks</p>
            <p className="text-orange-500 font-semibold">12php</p>
          </div>
        </div>

        <div className="bg-white shadow rounded-2xl">
          <div className="relative">
            <img src={bimbimbowl} className="h-50 w-full rounded-tl-2xl rounded-tr-2xl"/>
            <div className="absolute bottom-4 right-3 bg-white rounded-full p-0.5"><Plus size={22}/></div>
          </div>
          <div className="py-4 px-4">
            <h2 className="font-bold">Butter Noodles</h2>
            <p className="text-gray-500 text-xs my-2">Combo Meal with Softdrinks</p>
            <p className="text-orange-500 font-semibold">12php</p>
          </div>
        </div>
      </div>
    </menu>
  )
}