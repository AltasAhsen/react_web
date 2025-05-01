import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Link, Navigate, Outlet } from "react-router-dom";
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
import AdminNavbar from './components/AdminNavbar';
import UserNavbar from './components/UserNavbar';
import AdminProductPage from './components/AdminProductPage';
import AdminOrderPage from './components/AdminOrderPage';
import AdminUserPage from './components/AdminUserPage';
import AdminProductList from "./components/AdminProductList.jsx";
import AdminProductEdit from './components/AdminProductEdit';

function App() {
  const [cart, setCart] = useState([]);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userRole, setUserRole] = useState('user');

  const calculateTotal = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);
  };

  useEffect(() => {
    const userProfile = JSON.parse(localStorage.getItem("userProfile"));
    if (userProfile) {
      setIsLoggedIn(true);
      setUserRole(userProfile.role || 'user');
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
  const AdminRoute = () => {
    return userRole === 'admin' ? <Outlet /> : <Navigate to="/" replace />;
  };

  return (
    <Router>
      <div>
        {/* Basit navbar seçimi - admin sayfalarında AdminNavbar göster */}
        <Routes>
          <Route path="/admin/*" element={<AdminNavbar />} />
          <Route path="*" element={<UserNavbar />} />
        </Routes>

        {/* Routes */}
        <div className="container mt-4">
          <Routes>
            {/* Public Routes */}
            <Route path="/login" element={<LoginPage setUserRole={setUserRole} />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/forgot-password" element={<ForgotPasswordPage />} />
            
            {/* User Routes */}
            <Route path="/" element={<ProductList onAddToCart={handleAddToCart} />} />
            <Route path="/product/:id" element={<ProductDetail onAddToCart={handleAddToCart} />} />
            <Route path="/cart" element={<ItemCard cart={cart} onIncrease={handleIncrease} onDecrease={handleDecrease} />} />
            <Route path="/payment" element={<PaymentPage cart={cart} totalAmount={calculateTotal()} />} />
            <Route path="/order-confirmation" element={<OrderConfirmationPage />} />
            <Route path="/profile" element={<ProfilePage />} />
            <Route path="/edit-profile" element={<EditProfilePage />} />

             {/* Admin Routes - Tamamen açık */}
             <Route path="/admin/products" element={<AdminProductPage />} />
            <Route path="/admin/orders" element={<AdminOrderPage />} />
            <Route path="/admin/users" element={<AdminUserPage />} />
            <Route path="/admin/products/edit/:id" element={<AdminProductEdit />} />

            {/* 404 sayfası için fallback */}
            <Route path="*" element={<ProductList onAddToCart={handleAddToCart} />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;