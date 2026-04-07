import combo from '/navbar/combo.jpg'
import drink from '/navbar/drink.jpg'
import noodles from '/navbar/Noodles.jpg'
import kbowl from '/navbar/bimbimbowl.jpg'
import all from '/navbar/all.jpg'
import addOns from '/navbar/addOns.jpg'

export default function MenuNavBar({ activeCategory = "All", onSelectCategory }) {
  const nav = [
    { title: "All", value: "All", image: all },
    { title: "K-Bowls", value: "KBowl", image: kbowl },
    { title: "Combo", value: "Combo", image: combo },
    { title: "Noodles", value: "Noodles", image: noodles },
    { title: "Drinks", value: "Drinks", image: drink },
    { title: "Add Ons", value: "AddOns", image: addOns },
  ]
  return(
    <nav>
      <div className='my-10'>
        <h1 className='text-2xl font-serif'>Explore Menu</h1>
        <p className='text-sm w-200 mt-3 text-gray-500'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quis ipsum harum unde quibusdam voluptate temporibus inventore, libero cumque nulla fugiat, obcaecati dicta rem impedit? Fuga animi eveniet quod veritatis assumenda.</p>
      </div>
      <div className='flex items-center gap-12'>
        {nav.map((n) => {
          const isActive = activeCategory === n.value

          return(
            <button
              type='button'
              onClick={() => onSelectCategory?.(n.value)}
              className='text-center'
              key={n.title}
            >
              <div className='p-2  mb-2'>
               <img
                 src={n.image}
                 className={`size-18 rounded-full border-2 ${isActive ? 'border-red-500' : 'border-transparent hover:border-red-500'}`}
               />
              </div>
              <p className={isActive ? 'text-red-500 font-semibold' : 'text-gray-500'}>{n.title}</p>
            </button>
          )
        })}
      </div>
    </nav>
  )
}