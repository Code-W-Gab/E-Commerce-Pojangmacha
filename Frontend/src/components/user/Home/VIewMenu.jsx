import { Link } from "react-router-dom"
export default function ViewMenu() {
  return(
    <main className="bg-orange-500 h-100 rounded-xl my-10 flex items-center">
      <div className="px-12 text-white">
        <h1 className="text-5xl w-105 font-bold mb-6">Order your favorite food here</h1>
        <p className="w-140 mb-10">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Labore numquam recusandae neque sunt, velit, sed tempore fugit, illo veniam reiciendis repellendus distinctio sint architecto autem quaerat omnis quasi iusto nostrum?</p>
        <div>
          <Link to={"/Menu"} className="bg-white text-black px-8 py-2 rounded-4xl">View Menu</Link>
        </div>
      </div>
    </main>
  )
}