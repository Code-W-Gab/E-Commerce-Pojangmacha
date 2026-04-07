export default function Total({ subtotal = 0 }) {
  const deliveryFee = subtotal > 0 ? 20 : 0
  const total = subtotal + deliveryFee

  return(
    <main className="w-100">
      <h1 className="font-bold text-xl">Cart Totals</h1>
      <div className="flex flex-col gap-2 my-3">
        <div className="flex justify-between border-b pb-1 border-gray-300">
          <p>Subtotal</p>
          <p>₱{subtotal}</p>
        </div>
        <div className="flex justify-between border-b pb-1 border-gray-300">
          <p>Delivery Fee</p>
          <p>₱{deliveryFee}</p>
        </div>
        <div className="flex justify-between ">
          <p>Total</p>
          <p>₱{total}</p>
        </div>
      </div>
      <button className="bg-orange-500 text-white px-10 py-1.5 rounded-sm mt-4">Proceed to Checkout</button>
    </main>
  )
}