import icon from '/favicon.svg'
import combo from '/navbar/combo.jpg'
import drink from '/navbar/drink.jpg'
import noodles from '/navbar/Noodles.jpg'
import kbowl from '/navbar/bimbimbowl.jpg'
import all from '/navbar/all.jpg'
import addOns from '/navbar/addOns.jpg'

export default function MenuNavBar() {
  const nav = [
    {title: "All", image: all},
    {title: "K-Bowls", image: kbowl},
    {title: "Combo", image: combo},
    {title: "Noodles", image: noodles},
    {title: "Drinks", image: drink},
    {title: "Add Ons", image: addOns},
  ]
  return(
    <nav>
      <div className='my-10'>
        <h1 className='text-2xl font-serif'>Explore Menu</h1>
        <p className='text-sm w-200 mt-3 text-gray-500'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quis ipsum harum unde quibusdam voluptate temporibus inventore, libero cumque nulla fugiat, obcaecati dicta rem impedit? Fuga animi eveniet quod veritatis assumenda.</p>
      </div>
      <div className='flex items-center gap-12'>
        {nav.map((n) => {
          return(
            <div className='text-center ' key={n.title}>
              <div className='p-2  mb-2'>
               <img src={n.image} className='size-18 rounded-full hover:border border-red-500'/>
              </div>
              <p className='text-gray-500'>{n.title}</p>
            </div>
          )
        })}
      </div>
    </nav>
  )
}