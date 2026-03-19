import {ShoppingBasket} from 'lucide-react'

export default function Header() {
  return(
    <header className='flex items-center justify-between'>
      <h1 className='text-2xl font-bold text-orange-500'>Pojangmacha</h1>
      <div className='flex items-center gap-6 text-lg text-gray-500'>
        <p>home</p>
        <p>menu</p>
        <p>contact us</p>
      </div>
      <div className='flex items-center gap-6'>
        <ShoppingBasket size={30}/>
        <button className='border px-6 py-1 rounded-3xl'>Sign In</button>
      </div>
    </header>
  )
}