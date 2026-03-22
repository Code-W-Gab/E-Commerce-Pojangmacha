export default function PromoCode() {
  return(
    <main className="w-100">
      <p className="text-gray-400 mb-2">If you have a promo code, Enter it here</p>
      <div className="flex">
        <input
          className="px-3 w-full rounded-tl-sm rounded-bl-sm py-1 bg-gray-300"
          type="text"
          placeholder="promo code" 
        />
        <button className="bg-black text-white px-4 py-1 rounded-tr-sm rounded-br-sm">Submit</button>
      </div>
    </main>
  )
}