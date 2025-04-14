import React from "react";
import { useNavigate } from "react-router-dom";

function ItemCard({ cart, onIncrease, onDecrease }) {
  const navigate = useNavigate();

  const calculateTotal = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);
  };

  const handleCheckout = () => {
    navigate('/payment');
  };

  return (
    <div className="container mt-4">
      <h2 className="text-center mb-4">Your Cart</h2>
      {cart.length > 0 ? (
        <>
          <ul className="list-group mb-4">
            {cart.map((item, index) => (
              <li key={index} className="list-group-item d-flex justify-content-between align-items-center">
                <div className="d-flex align-items-center">
                  <img
                    src={item.img_url}
                    alt={item.name}
                    style={{
                      width: "60px",
                      height: "60px",
                      objectFit: "contain",
                      backgroundColor: "#f8f9fa",
                      padding: "5px",
                      marginRight: "15px",
                      borderRadius: "5px",
                      boxShadow: "0 2px 4px rgba(0, 0, 0, 0.2)",
                    }}
                  />
                  <div>
                    <strong>{item.name}</strong><br />
                    ${item.price} x {item.quantity} = <strong>${(item.price * item.quantity).toFixed(2)}</strong>
                  </div>
                </div>
                <div>
                  <button className="btn btn-sm btn-outline-secondary me-2" onClick={() => onDecrease(item)}>-</button>
                  <button className="btn btn-sm btn-outline-primary" onClick={() => onIncrease(item)}>+</button>
                </div>
              </li>
            ))}
          </ul>

          <h4 className="text-end">Total: ${calculateTotal()}</h4>
          <div className="d-flex justify-content-end mt-3">
            <button 
              className="btn btn-success" 
              onClick={handleCheckout}
              disabled={cart.length === 0}
            >
              Proceed to Checkout
            </button>
          </div>
        </>
      ) : (
        <p className="text-center">Your cart is empty.</p>
      )}
    </div>
  );
}

export default ItemCard;