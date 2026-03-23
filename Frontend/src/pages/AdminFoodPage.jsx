import Header from "../components/admin/common/Header";
import SideBar from "../components/admin/common/SideBar";
import Food from "../components/admin/Food/Food";

export default function AdminFoodPage() {
  return(
    <main className="flex">
      <SideBar/>
      <div className="w-full">
        <Header/>
        <Food/>
      </div>
    </main>
  )
}