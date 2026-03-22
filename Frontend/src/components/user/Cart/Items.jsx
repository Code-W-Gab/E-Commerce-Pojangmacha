import bimbimbowl from "/bimbimbowl.jpg"
import { Trash2 } from "lucide-react"

export default function Items() {
  return(
    <main>
      <div className="grid grid-cols-6 border-b pb-2 border-gray-300 text-gray-400">
        <p>Items</p>
        <p>Title</p>
        <p className="text-center">Price</p>
        <p className="text-center">Quantity</p>
        <p className="text-center">Total</p>
        <p className="text-center">Remove</p>
      </div>

      <div className="grid grid-cols-6 mt-4 items-center border-b pb-2 border-gray-300">
        <img src={bimbimbowl} className="h-10 rounded-sm"/>
        <p>Greek Salad</p>
        <p className="text-center">12pesos</p>
        <p className="text-center">2</p>
        <p className="text-center">24pesos</p>
        <div className="flex justify-center">
          <Trash2 className="size-5 text-red-500"/>
        </div>
      </div>
    </main>
  )
}