import { Plus } from "lucide-react";
import FoodList from "./FoodList";
import { useState } from "react";
import AddFood from "./AddFood";

export default function Food({ food }) {
  const [isAddFoodOpen, setIsAddFoodOpen] = useState(false);

  return(
    <div>
      <main className="p-4">
        <div className="flex items-center justify-between">
          <h1 className="font-bold text-lg">Manage Food Items</h1>
          <button onClick={() => setIsAddFoodOpen(true)} className="flex items-center gap-2 bg-orange-400 text-white px-4 py-1 rounded-md">
            <Plus size={20}/>
            <span>Add Food</span>
          </button>
        </div>
        <FoodList food={food}/>
      </main>

      {isAddFoodOpen && (
        <div className="fixed inset-0 flex bg-gray-800/50 items-center justify-center z-40">
          <div className="bg-opacity-25 z-50">
            <AddFood onClose={() => setIsAddFoodOpen(false)}/>
          </div>
        </div>
      )}
    </div>
  )
}