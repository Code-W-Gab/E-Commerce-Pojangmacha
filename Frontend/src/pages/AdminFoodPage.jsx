import { useEffect, useState } from "react";
import Header from "../components/admin/common/Header";
import SideBar from "../components/admin/common/SideBar";
import Food from "../components/admin/Food/Food";
import { GetFood } from "../service/foodService";

export default function AdminFoodPage() {
  const [food, setFood] = useState([]);

  function fetchFood() {
    GetFood()
      .then(res => {
        setFood(res.data)
      }).catch(err => console.log(err))
  }

  useEffect(() => {
    fetchFood()
  }, []);

  return(
    <main className="flex">
      <SideBar/>
      <div className="w-full">
        <Header/>
        <Food food={food} fetchFood={fetchFood}/>
      </div>
    </main>
  )
}