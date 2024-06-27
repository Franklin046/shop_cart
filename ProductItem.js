import React from "react";
import "./ProductItem.css";

const ProductItem = ({
  product,
  addToCart,
  removeFromCart,
  isAdded,
  updateQuantity,
}) => {
  return (
    <div className="product-item">
      <img src={product.image} alt={product.name} />
      <h3>{product.name}</h3>
      <p>{product.description}</p>
      <p>${product.price}</p>
      {isAdded ? (
        <div>
          <button onClick={() => removeFromCart(product.id)}>
            Remove from Cart
          </button>
          <input
            type="number"
            min="1"
            value={isAdded.quantity}
            onChange={(e) =>
              updateQuantity(product.id, parseInt(e.target.value))
            }
          />
        </div>
      ) : (
        <button onClick={() => addToCart(product.id)}>Add to Cart</button>
      )}
    </div>
  );
};

export default ProductItem;
