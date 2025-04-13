import React from "react";

function ItemCard({ cart }) {
  return (
    <div className="container mt-4">
      <h2 className="text-center mb-4">Your Cart</h2>
      {cart.length > 0 ? (
        <ul className="list-group">
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
                {item.name} - ${item.price}
              </div>
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-center">Your cart is empty.</p>
      )}
    </div>
  );
}

export default ItemCard;
