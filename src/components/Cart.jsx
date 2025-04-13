import React, { useState, useEffect } from "react";
import mockProducts from "./mockData";

function Cart() {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    // fetch("https://localhost:5001/api/cart")
    //   .then((response) => response.json())
    //   .then((data) => setCart(data));
    setCart(mockProducts);
  }, []);

setCart(mockProducts)

return (
    <div className="container mt-4">
      <h2 className="text-center mb-4">Your Cart</h2>
      {cart.length > 0 ? (
        <ul className="list-group">
          {cart.map((item) => (
            <li key={item.id} className="list-group-item d-flex justify-content-between align-items-center">
              <span>
                {item.name} - ${item.price} x 1
              </span>
              <button className="btn btn-danger btn-sm">Remove</button>
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-center">Your cart is empty.</p>
      )}
      <div className="text-center mt-4">
        <button className="btn btn-primary">Checkout</button>
      </div>
    </div>
  );
}

export default Cart;