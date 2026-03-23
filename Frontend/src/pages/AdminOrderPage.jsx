import Header from "../components/admin/common/Header";
import SideBar from "../components/admin/common/SideBar";
import Order from "../components/admin/Order/Order";

export default function AdminOrderPage() {
  return(
    <main className="flex">
      <SideBar/>
      <div className="w-full">
        <Header/>
        <Order/>
      </div>
    </main>
  )
}