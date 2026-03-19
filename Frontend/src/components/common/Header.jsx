import {ShoppingBasket} from 'lucide-react'
import { Link } from 'react-router-dom'

export default function Header() {
  return(
    <header className='flex items-center justify-between'>
      <h1 className='text-2xl font-bold text-orange-500'>Pojangmacha</h1>
      <div className='flex items-center gap-6 text-lg text-gray-500'>
        <Link to={"/Home"}>home</Link>
        <Link to={"/Menu"}>menu</Link>
        <Link to={"/Contacts"}>contact us</Link>
      </div>
      <div className='flex items-center gap-6'>
        <ShoppingBasket size={30}/>
        <button className='border px-6 py-1 rounded-3xl'>Sign In</button>
      </div>
    </header>
  )
}