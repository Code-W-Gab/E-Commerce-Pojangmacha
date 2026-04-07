import { Minus, Plus, Trash2 } from "lucide-react"

export default function Items({ cartItems, onIncrease, onDecrease, onRemove }) {
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

      {cartItems.length === 0 ? (
        <div className="text-center text-gray-500 py-8 border-b border-gray-300">
          Your cart is empty.
        </div>
      ) : (
        cartItems.map(({ item, quantity }) => (
          <div key={item._id} className="grid grid-cols-6 mt-4 items-center border-b pb-2 border-gray-300">
            <img src={item.Image} className="h-10 w-10 rounded-sm object-cover"/>
            <p>{item.FoodName}</p>
            <p className="text-center">₱{item.Price}</p>
            <div className="flex items-center justify-center gap-3">
              <button onClick={() => onDecrease(item._id)} className="bg-red-200 text-red-500 rounded-full p-0.5">
                <Minus size={16}/>
              </button>
              <p>{quantity}</p>
              <button onClick={() => onIncrease(item._id)} className="bg-green-200 text-green-500 rounded-full p-0.5">
                <Plus size={16}/>
              </button>
            </div>
            <p className="text-center">₱{Number(item.Price) * quantity}</p>
            <div className="flex justify-center">
              <button onClick={() => onRemove(item._id)}>
                <Trash2 className="size-5 text-red-500"/>
              </button>
            </div>
          </div>
        ))
      )}
    </main>
  )
}