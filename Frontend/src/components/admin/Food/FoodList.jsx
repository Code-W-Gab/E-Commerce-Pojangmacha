import { Trash2 } from 'lucide-react';
import { useState } from 'react';
import DeleteFoodModal from './DeleteFoodModal';
import { deleteFood } from '../../../service/foodService';
import toast from 'react-hot-toast';


export default function FoodList({ food, fetchFood }) {
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [selectId, setSelectId] = useState(null);
  const [loading, setLoading] = useState(false);

  function handleDeleteFood() {
    setLoading(true)
    deleteFood(selectId)
      .then(res => {
        toast.success("Deleted Food")
        setIsDeleteModalOpen(false)
        fetchFood()
        setLoading(false)
      }).catch(err => {
        setLoading(false)
        console.log(err)
      })
  }

  return(
    <div>
      <main className="mt-5">
        <h1 className="font-semibold text-lg mb-2">All Foods List</h1>
        <header className="grid grid-cols-4 items-center text-center bg-gray-200 border border-gray-500 px-4 py-2">
          <div className="flex gap-20 items-center ">
            <p>Image</p>
            <p>Name</p>
          </div>
          <p>Category</p>
          <p>Price</p>
          <p>Action</p>
        </header>

        {
          food.map((f) => {
            return(
              <div key={f._id} className="grid grid-cols-4 items-center text-center border border-gray-500 border-t-0 px-4 py-1">
                <div className="flex gap-20 items-center ">
                <img src={f.Image} alt={f.FoodName} className="size-10 rounded-sm object-cover border border-gray-300" />
                  <p>{f.FoodName}</p>
                </div>
                <p>{f.Descriptions}</p>
                <p>₱{f.Price}</p>
                <button 
                  onClick={() => {
                    setIsDeleteModalOpen(true)
                    setSelectId(f._id)
                  }} 
                  className='flex justify-center'>
                  <Trash2 size={20} className='text-red-500'/>
                </button>
              </div>
            )
          })
        }
      </main>

      {isDeleteModalOpen && (
        <div className="fixed inset-0 flex bg-gray-800/50 items-center justify-center z-40">
          <div className="bg-opacity-25 z-50">
            <DeleteFoodModal onClose={() => setIsDeleteModalOpen(false)} onDelete={() => handleDeleteFood()}/>
          </div>
        </div>
      )}

      {/* Loading Overlay */}
      {loading && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white p-8 rounded-lg shadow-2xl flex flex-col items-center">
            <div className="animate-spin rounded-full h-16 w-16 border-b-4 border-orange-500"></div>
            <p className="mt-4 text-gray-700 font-semibold">Loading...</p>
          </div>
        </div>
      )}
    </div>
  )
}