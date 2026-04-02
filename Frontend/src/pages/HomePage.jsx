import { useEffect, useState } from "react";
import Header from "../components/common/Header";
import Menu from "../components/user/Home/Menu";
import MenuNavBar from "../components/user/Home/MenuNavBar";
import { GetFood } from "../service/foodService";


export default function HomePage() {
  const [food, setFood] = useState([])

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
  
  return(
    <main className="py-4 px-50">
      <Header/>
      <div>
        <MenuNavBar/>
      </div>
      <div className="border-b-2 my-10 border-gray-400"></div>
      <div>
        <Menu food={food}/>
      </div>
    </main>
  )
}