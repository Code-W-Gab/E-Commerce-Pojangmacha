import Header from "../common/Header";
import Menu from "./Menu";
import MenuNavBar from "./MenuNavBar";

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