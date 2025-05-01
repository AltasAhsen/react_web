import React from 'react';
import { Link } from 'react-router-dom';

const OrderConfirmationPage = () => {
  return (
    <div className="container mt-4">
      <div className="card text-center">
        <div className="card-body">
          <h2 className="card-title text-success">Order Confirmed!</h2>
          <div className="my-4">
            <svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" fill="#28a745" className="bi bi-check-circle" viewBox="0 0 16 16">
              <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
              <path d="M10.97 4.97a.235.235 0 0 0-.02.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-1.071-1.05z"/>
            </svg>
          </div>
          <p className="card-text">Your order has been successfully placed. Thank you!</p>
          <p>Order details will be sent to your email.</p>
          <Link to="/" className="btn btn-primary mt-3">Back to Home</Link>
        </div>
      </div>
    </div>
  );
};

export default OrderConfirmationPage;