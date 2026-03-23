import noodles from '/navbar/Noodles.jpg';
import { Trash2 } from 'lucide-react';

export default function FoodList() {
  return(
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

      <div className="grid grid-cols-4 items-center text-center border border-gray-500 border-t-0 px-4 py-1">
        <div className="flex gap-20 items-center ">
          <img src={noodles} className='size-10 rounded-sm'/>
          <p>Ramen</p>
        </div>
        <p>Noodles</p>
        <p>₱ 55</p>
        <div className='flex justify-center'>
          <Trash2 size={20} className='text-red-500'/>
        </div>
      </div>

      <div className="grid grid-cols-4 items-center text-center border border-gray-500 border-t-0 px-4 py-1">
        <div className="flex gap-20 items-center ">
          <img src={noodles} className='size-10 rounded-sm'/>
          <p>Ramen</p>
        </div>
        <p>Noodles</p>
        <p>₱ 55</p>
        <div className='flex justify-center'>
          <Trash2 size={20} className='text-red-500'/>
        </div>
      </div>
    </main>
  )
}