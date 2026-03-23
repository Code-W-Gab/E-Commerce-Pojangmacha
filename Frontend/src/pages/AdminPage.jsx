import Header from "../components/admin/common/Header";
import SideBar from "../components/admin/common/SideBar";

export default function AdminPage() {
  return(
    <main className="flex ">
      <SideBar/>
      <Header/>
    </main>
  )
}