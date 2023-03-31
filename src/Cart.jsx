// import react hooks
import { useContext, memo } from "react";

// import context
import Context from "./context/Context";

const Cart = () => {
  const { cartItems, removeFromCart, clearCart } = useContext(Context);
  console.log(cartItems);
  return (
    <div className="cart_page">
      <div className="container">
        <div className="cart_page_main">
          <div className="cart_page_items">
            {cartItems.length !== 0 ? (
              cartItems.map((item) => (
                <div className="cart_item" key={item.id}>
                  <img src={item.image} alt="" />
                  <p>{item.category}</p>
                  <p>{item.price}</p>
                  <button onClick={removeFromCart}>Remove Cart</button>
                </div>
              ))
            ) : (
              <h1>Cart is empty</h1>
            )}
          </div>
          <button onClick={clearCart}>Clear Cart Page</button>
        </div>
      </div>
    </div>
  );
};

export default memo(Cart);
