import { Plus, Minus } from "lucide-react"
import { useCart } from "../../../context/useCart"

export default function Menu({ food }) {
  const { addToCart, increaseQuantity, decreaseQuantity, getQuantity } = useCart()

  return (
    <menu>
      <h1 className="text-2xl font-bold mb-10">Top Food</h1>
      {food.length === 0 ? (
        <div className="rounded-2xl border border-dashed border-gray-300 py-12 text-center text-gray-500">
          No food found in this category.
        </div>
      ) : (
        <div className="grid grid-cols-4 items-center gap-10">
          {food.map((f) => {
            const qty = getQuantity(f._id)

            return (
              <div key={f._id} className="bg-white shadow rounded-2xl">
                <div className="relative">
                  <img src={f.Image} className="h-50 w-full rounded-tl-2xl rounded-tr-2xl" />
                  <div className="absolute bottom-4 right-3 p-0.5 flex items-center bg-white rounded-full border border-white">
                    {qty === 0 ? (
                      <button onClick={() => addToCart(f)}>
                        <Plus size={20} />
                      </button>
                    ) : (
                      <div className="flex items-center justify-between gap-3">
                        <button onClick={() => decreaseQuantity(f._id)} className="bg-red-200 text-red-500 rounded-full p-0.5">
                          <Minus size={18} />
                        </button>
                        <p>{qty}</p>
                        <button onClick={() => increaseQuantity(f._id)} className="bg-green-200 text-green-500 rounded-full p-0.5">
                          <Plus size={18} />
                        </button>
                      </div>
                    )}
                  </div>
                </div>
                <div className="py-4 px-4">
                  <h2 className="font-bold">{f.FoodName}</h2>
                  <p className="text-gray-500 text-xs my-2">{f.Descriptions}</p>
                  <p className="text-orange-500 font-semibold">₱{f.Price}</p>
                </div>
              </div>
            )
          })}
        </div>
      )}
    </menu>
  )
}