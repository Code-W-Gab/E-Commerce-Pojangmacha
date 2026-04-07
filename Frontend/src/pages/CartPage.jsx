import Header from "../components/common/Header";
import Items from "../components/user/Cart/Items";
import PromoCode from "../components/user/Cart/PromoCode";
import Total from "../components/user/Cart/Total";
import { useCart } from "../context/useCart";

export default function CartPage() {
  const {
    cartItems,
    subtotal,
    increaseQuantity,
    decreaseQuantity,
    removeFromCart,
  } = useCart();

  return(
    <main className="py-4 px-50">
      <Header/>
      <div className="my-10">
        <Items
          cartItems={cartItems}
          onIncrease={increaseQuantity}
          onDecrease={decreaseQuantity}
          onRemove={removeFromCart}
        />
      </div>
      <div className="flex items-center justify-between">
        <Total subtotal={subtotal}/>
        <PromoCode/>
      </div>
    </main>
  )
}