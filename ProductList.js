import React from "react";
import ProductItem from "./ProductItem";
import "./ProductList.css";

const ProductList = ({
  products,
  addToCart,
  removeFromCart,
  cart,
  updateQuantity,
}) => {
  return (
    <div className="product-list">
      {products.map((product) => {
        const cartItem = cart.find((item) => item.id === product.id);
        return (
          <ProductItem
            key={product.id}
            product={product}
            addToCart={addToCart}
            removeFromCart={removeFromCart}
            isAdded={cartItem}
            updateQuantity={updateQuantity}
          />
        );
      })}
    </div>
  );
};

export default ProductList;
