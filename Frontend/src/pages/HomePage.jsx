import Header from "../components/common/Header";
import Menu from "../components/user/Home/Menu";
import MenuNavBar from "../components/user/Home/MenuNavBar";

export default function HomePage() {
  return(
    <main className="py-4 px-50">
      <Header/>
      <div>
        <MenuNavBar/>
      </div>
      <div className="border-b-2 my-10 border-gray-400"></div>
      <div>
        <Menu/>
      </div>
    </main>
  )
}