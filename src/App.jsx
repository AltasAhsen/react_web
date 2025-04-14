import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import ProductList from "./components/ProductList";
import ProductDetail from "./components/ProductDetail";
import ItemCard from "./components/ItemCard";
import LoginPage from './components/LoginPage';
import RegisterPage from "./components/RegisterPage.jsx";
import ProfilePage from "./components/ProfilePage.jsx";
import ForgotPasswordPage from './components/ForgotPasswordPage';
import LogoutButton from "./components/LogoutButton";
import EditProfilePage from './components/EditProfilePage';
import PaymentPage from './components/PaymentPage';
import OrderConfirmationPage from './components/OrderConfirmationPage';

function App() {
  const [cart, setCart] = useState([]);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const calculateTotal = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);
  };

  useEffect(() => {
    const userProfile = localStorage.getItem("userProfile");
    if (userProfile) {
      setIsLoggedIn(true);
    }
  }, []);

  const handleAddToCart = (item) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((i) => i.id === item.id);
      if (existingItem) {
        return prevCart.map((i) =>
          i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i
        );
      } else {
        return [...prevCart, { ...item, quantity: 1 }];
      }
    });
  };

  const handleIncrease = (item) => {
    handleAddToCart(item);
  };

  const handleDecrease = (item) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((i) => i.id === item.id);
      if (existingItem.quantity === 1) {
        return prevCart.filter((i) => i.id !== item.id);
      } else {
        return prevCart.map((i) =>
          i.id === item.id ? { ...i, quantity: i.quantity - 1 } : i
        );
      }
    });
  };

  return (
    <Router>
      <div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
          <div className="container">
            <Link to="/" className="navbar-brand" style={{ fontSize: "1.8rem", fontWeight: "bold" }}>
              E-Commerce Platform
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav ms-auto">
                <li className="nav-item">
                  <Link to="/" className="nav-link">Products</Link>
                </li>
                <li className="nav-item">
                  <Link to="/cart" className="nav-link">Cart</Link>
                </li>
                {isLoggedIn ? (
                  <>
                    <li className="nav-item">
                      <Link to="/profile" className="nav-link">Profile</Link>
                    </li>
                    <li className="nav-item">
                      <LogoutButton setIsLoggedIn={setIsLoggedIn} />
                    </li>
                  </>
                ) : (
                  <>
                    <li className="nav-item">
                      <Link to="/login" className="nav-link">Login</Link>
                    </li>
                    <li className="nav-item">
                      <Link to="/register" className="nav-link">Register</Link>
                    </li>
                  </>
                )}
              </ul>
            </div>
          </div>
        </nav>

        <div className="container mt-4">
          <Routes>
            <Route path="/" element={<ProductList onAddToCart={handleAddToCart} />} />
            <Route path="/product/:id" element={<ProductDetail onAddToCart={handleAddToCart} />} />
            <Route path="/cart" element={
              <ItemCard
                cart={cart}
                onIncrease={handleIncrease}
                onDecrease={handleDecrease}
              />
            } />
            <Route path="/payment" element={
              <PaymentPage 
                cart={cart} 
                totalAmount={calculateTotal()} 
              />
            } />
            <Route path="/order-confirmation" element={<OrderConfirmationPage />} />
            <Route path="/login" element={<LoginPage setIsLoggedIn={setIsLoggedIn} />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/forgot-password" element={<ForgotPasswordPage />} />
            <Route path="/profile" element={<ProfilePage />} />
            <Route path="/edit-profile" element={<EditProfilePage />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;