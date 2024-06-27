import React from "react";
import "./Cart.css";

const Cart = ({ cart, removedItems, products }) => {
  const calculateTotalPrice = (items) => {
    return items.reduce((total, item) => {
      const product = products.find((p) => p.id === item.id);
      return total + product.price * item.quantity;
    }, 0);
  };

  const addedTotal = calculateTotalPrice(cart);
  const removedTotal = calculateTotalPrice(removedItems);
  const overallTotal = addedTotal + removedTotal;

  return (
    <div className="cart">
      <h2>Cart</h2>
      <div className="cart-section">
        <h3>Added Items</h3>
        {cart.length === 0 ? (
          <p>No items in cart.</p>
        ) : (
          <ul>
            {cart.map((item) => {
              const product = products.find((p) => p.id === item.id);
              return (
                <li key={item.id}>
                  {product.name} - ${product.price} x {item.quantity}
                </li>
              );
            })}
          </ul>
        )}
        <p>Total Added: ${addedTotal.toFixed(2)}</p>
      </div>
      <div className="cart-section">
        <h3>Removed Items</h3>
        {removedItems.length === 0 ? (
          <p>No items removed.</p>
        ) : (
          <ul>
            {removedItems.map((item) => {
              const product = products.find((p) => p.id === item.id);
              return (
                <li key={item.id}>
                  {product.name} - ${product.price} x {item.quantity}
                </li>
              );
            })}
          </ul>
        )}
        <p>Total Removed: ${removedTotal.toFixed(2)}</p>
      </div>
      <p>Overall Total: ${overallTotal.toFixed(2)}</p>
    </div>
  );
};

export default Cart;
