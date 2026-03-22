import Header from "../components/common/Header";
import Items from "../components/user/Cart/Items";
import PromoCode from "../components/user/Cart/PromoCode";
import Total from "../components/user/Cart/Total";

export default function CartPage() {
  return(
    <main className="py-4 px-50">
      <Header/>
      <div className="my-10">
        <Items/>
      </div>
      <div className="flex items-center justify-between">
        <Total/>
        <PromoCode/>
      </div>
    </main>
  )
}