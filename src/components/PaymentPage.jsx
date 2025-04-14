import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const PaymentPage = ({ cart, totalAmount }) => {
  const [paymentMethod, setPaymentMethod] = useState('creditCard');
  const [cardNumber, setCardNumber] = useState('');
  const [cardExpiry, setCardExpiry] = useState('');
  const [cardCvc, setCardCvc] = useState('');
  const [billingAddress, setBillingAddress] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    if (paymentMethod === 'creditCard' && (!cardNumber || !cardExpiry || !cardCvc)) {
      setError('Please fill all card details');
      setLoading(false);
      return;
    }

    // Mock payment processing
    setTimeout(() => {
      console.log('Payment details:', {
        paymentMethod,
        cardNumber,
        cardExpiry,
        cardCvc,
        billingAddress
      });
      alert(`Payment successful! Total amount: $${totalAmount}`);
      navigate('/order-confirmation');
      setLoading(false);
    }, 1500);
  };

  return (
    <div className="container mt-4">
      <h2 className="mb-4">Payment</h2>
      <div className="row">
        <div className="col-md-8">
          <div className="card mb-4">
            <div className="card-body">
              <h4 className="card-title">Payment Method</h4>
              
              <div className="form-check mb-3">
                <input
                  className="form-check-input"
                  type="radio"
                  id="creditCard"
                  checked={paymentMethod === 'creditCard'}
                  onChange={() => setPaymentMethod('creditCard')}
                />
                <label className="form-check-label" htmlFor="creditCard">
                  Credit Card
                </label>
              </div>

              {paymentMethod === 'creditCard' && (
                <div className="card-form mb-4">
                  <div className="mb-3">
                    <label htmlFor="cardNumber" className="form-label">Card Number</label>
                    <input
                      type="text"
                      className="form-control"
                      id="cardNumber"
                      placeholder="1234 5678 9012 3456"
                      value={cardNumber}
                      onChange={(e) => setCardNumber(e.target.value)}
                    />
                  </div>
                  <div className="row">
                    <div className="col-md-6 mb-3">
                      <label htmlFor="cardExpiry" className="form-label">Expiry Date</label>
                      <input
                        type="text"
                        className="form-control"
                        id="cardExpiry"
                        placeholder="MM/YY"
                        value={cardExpiry}
                        onChange={(e) => setCardExpiry(e.target.value)}
                      />
                    </div>
                    <div className="col-md-6 mb-3">
                      <label htmlFor="cardCvc" className="form-label">CVC</label>
                      <input
                        type="text"
                        className="form-control"
                        id="cardCvc"
                        placeholder="123"
                        value={cardCvc}
                        onChange={(e) => setCardCvc(e.target.value)}
                      />
                    </div>
                  </div>
                </div>
              )}

              <div className="form-check mb-3">
                <input
                  className="form-check-input"
                  type="radio"
                  id="paypal"
                  checked={paymentMethod === 'paypal'}
                  onChange={() => setPaymentMethod('paypal')}
                />
                <label className="form-check-label" htmlFor="paypal">
                  PayPal
                </label>
              </div>

              <div className="mb-3">
                <label htmlFor="billingAddress" className="form-label">Billing Address</label>
                <textarea
                  className="form-control"
                  id="billingAddress"
                  rows="3"
                  value={billingAddress}
                  onChange={(e) => setBillingAddress(e.target.value)}
                ></textarea>
              </div>
            </div>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card">
            <div className="card-body">
              <h4 className="card-title">Order Summary</h4>
              <ul className="list-group list-group-flush mb-3">
                {cart.map((item, index) => (
                  <li key={index} className="list-group-item d-flex justify-content-between">
                    <span>
                      {item.name} x {item.quantity}
                    </span>
                    <span>${(item.price * item.quantity).toFixed(2)}</span>
                  </li>
                ))}
                <li className="list-group-item d-flex justify-content-between fw-bold">
                  <span>Total</span>
                  <span>${totalAmount}</span>
                </li>
              </ul>

              {error && <div className="alert alert-danger">{error}</div>}

              <button
                className="btn btn-primary w-100"
                onClick={handleSubmit}
                disabled={loading || cart.length === 0}
              >
                {loading ? 'Processing...' : 'Complete Payment'}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentPage;