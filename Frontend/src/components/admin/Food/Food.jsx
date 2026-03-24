import { Plus } from "lucide-react";
import FoodList from "./FoodList";

export default function Food({ food }) {
  return(
    <main className="p-4">
      <div className="flex items-center justify-between">
        <h1 className="font-bold text-lg">Manage Food Items</h1>
        <button className="flex items-center gap-2 bg-orange-400 text-white px-4 py-1 rounded-md">
          <Plus size={20}/>
          <span>Add Food</span>
        </button>
      </div>
      <FoodList food={food}/>
    </main>
  )
}