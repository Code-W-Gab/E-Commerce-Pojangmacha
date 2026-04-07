import { useMemo, useState } from "react";
import { CartContext } from "./CartContextObject";

export function CartProvider({ children }) {
  const [cart, setCart] = useState({});

  function addToCart(item) {
    setCart((prev) => {
      const existing = prev[item._id];
      return {
        ...prev,
        [item._id]: {
          item,
          quantity: (existing?.quantity || 0) + 1,
        },
      };
    });
  }

  function increaseQuantity(id) {
    setCart((prev) => {
      const existing = prev[id];
      if (!existing) return prev;

      return {
        ...prev,
        [id]: {
          ...existing,
          quantity: existing.quantity + 1,
        },
      };
    });
  }

  function decreaseQuantity(id) {
    setCart((prev) => {
      const existing = prev[id];
      if (!existing) return prev;

      if (existing.quantity <= 1) {
        const { [id]: _, ...rest } = prev;
        return rest;
      }

      return {
        ...prev,
        [id]: {
          ...existing,
          quantity: existing.quantity - 1,
        },
      };
    });
  }

  function removeFromCart(id) {
    setCart((prev) => {
      if (!prev[id]) return prev;
      const { [id]: _, ...rest } = prev;
      return rest;
    });
  }

  function getQuantity(id) {
    return cart[id]?.quantity || 0;
  }

  const cartItems = useMemo(() => Object.values(cart), [cart]);

  const subtotal = useMemo(
    () =>
      cartItems.reduce(
        (sum, entry) => sum + Number(entry.item.Price) * entry.quantity,
        0
      ),
    [cartItems]
  );

  const cartCount = useMemo(
    () => cartItems.reduce((sum, entry) => sum + entry.quantity, 0),
    [cartItems]
  );

  const value = {
    cartItems,
    cartCount,
    subtotal,
    addToCart,
    increaseQuantity,
    decreaseQuantity,
    removeFromCart,
    getQuantity,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}
