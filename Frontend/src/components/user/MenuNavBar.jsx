import icon from '../../../public/favicon.svg'

export default function MenuNavBar() {
  const nav = [
    {title: "All", image: icon},
    {title: "K-Bowls", image: icon},
    {title: "Combo", image: icon},
    {title: "Noodles", image: icon},
    {title: "Drinks", image: icon},
  ]
  return(
    <nav>
      <div className='my-10'>
        <h1 className='text-2xl font-serif'>Explore Menu</h1>
        <p className='text-sm w-200 mt-3 text-gray-500'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quis ipsum harum unde quibusdam voluptate temporibus inventore, libero cumque nulla fugiat, obcaecati dicta rem impedit? Fuga animi eveniet quod veritatis assumenda.</p>
      </div>
      <div className='flex items-center gap-14'>
        {nav.map((n) => {
          return(
            <div className='text-center'>
              <div className='bg-red-500 p-2 rounded-full mb-2'>
               <img src={n.image}/>
              </div>
              <p className='text-gray-500'>{n.title}</p>
            </div>
          )
        })}
      </div>
    </nav>
  )
}