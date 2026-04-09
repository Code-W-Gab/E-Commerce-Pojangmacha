import { useEffect, useState } from "react";
import Header from "../components/common/Header";
import Menu from "../components/user/Home/Menu";
import MenuNavBar from "../components/user/Home/MenuNavBar";
import { GetFood } from "../service/foodService";
import ViewMenu from "../components/user/Home/VIewMenu";


export default function HomePage() {
  const [food, setFood] = useState([])
  const [selectedCategory, setSelectedCategory] = useState("All")

  function fetchFood(){
    GetFood()
      .then(res => {
        setFood(res.data)
      })
      .catch(err => console.log(err))
  }

  useEffect(() => {
    fetchFood()
  }, [])

  const filteredFood = selectedCategory === "All"
    ? food
    : food.filter((item) => item.Category === selectedCategory)
  
  return(
    <main className="py-4 px-50">
      <Header/>
      <div>
        <ViewMenu/>
      </div>
      <div>
        <MenuNavBar
          activeCategory={selectedCategory}
          onSelectCategory={setSelectedCategory}
        />
      </div>
      <div className="border-b-2 my-10 border-gray-400"></div>
      <div>
        <Menu food={filteredFood}/>
      </div>
    </main>
  )
}