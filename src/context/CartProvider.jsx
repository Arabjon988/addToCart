// import react hooks
import { useState, useEffect } from "react";

// import context api
import Context from "./Context";

// import axios
import axios from "axios";

const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [product, setProduct] = useState([]);
  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((res) => setProduct(res.data))
      .catch((err) => console.log(err));
  }, []);

  const addToCart = (item) => {
    const index = cartItems.findIndex((cartItem) => cartItem.id === item.id);
    if (index !== -1) {
      const newCartItems = [...cartItems];
      newCartItems[index] = { ...newCartItems[index] };
      setCartItems(newCartItems);
    } else {
      setCartItems([...cartItems, { ...item }]);
    }
  };
  const removeFromCart = (item) => {
    setCartItems(cartItems.filter((cartItem) => cartItem.id !== item.id));
  };

  const clearCart = () => {
    setCartItems([]);
  };

  const contextValue = {
    cartItems,
    product,
    addToCart,
    removeFromCart,
    clearCart,
  };

  return <Context.Provider value={contextValue}>{children}</Context.Provider>;
};

export default CartProvider;
