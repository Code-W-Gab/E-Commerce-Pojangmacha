export default function DeleteFoodModal({onClose, onDelete}) {
  return(
    <main className="bg-white w-100 p-5 rounded-md">
      <h1 className="font-bold text-xl mb-4">Delete Item?</h1>
      <p className="text-gray-500 text-sm">Are you sure you want to delete this item?</p>
      <div className="flex items-center gap-3 justify-end mt-8">
          <button
            onClick={onClose}
            className="border px-3 py-0.5 rounded-sm"
          >
            Cancel
          </button>
          <button 
            onClick={onDelete}
            className="border border-red-500 px-4 py-0.5 rounded-sm bg-red-500 text-white"
          >
            Delete
          </button>
        </div>
    </main>
  )
}