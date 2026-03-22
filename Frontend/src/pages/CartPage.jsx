import Header from "../components/common/Header";
import Items from "../components/user/Cart/Items";

export default function CartPage() {
  return(
    <main className="py-4 px-50">
      <Header/>
      <div className="my-10">
        <Items/>
      </div>
    </main>
  )
}