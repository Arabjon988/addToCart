// import react hooks
import { useContext, memo } from "react";

// import context api
import Context from "./context/Context";


const Product = () => {
  const { addToCart, product } = useContext(Context);

  const handleAddToCart = (item) => {
    setTimeout ( ()=>{
      alert("Successuful add to cart")
    }, 200)
    addToCart(item);
  };
  return (
    <div className="products">
      <div className="container">
        <div className="products_main">
          <div className="product_items">
            {product.map((i) => (
              <div className="product_item" key={i.id}>
                <img src={i.image} alt={i.title} />
                <p>{i.category}</p>
                <b>{i.price} $</b><br />
                <button onClick={() => handleAddToCart(i)}>Add to Cart</button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default memo(Product);
