import React from 'react';
import { useNavigate } from 'react-router-dom';

const LogoutButton = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("authToken");
    localStorage.removeItem("userProfile");
    navigate("/login");
    window.location.reload(); // State'leri sıfırlamak için
  };

  return (
    <button 
      className="btn btn-outline-light" 
      onClick={handleLogout}
    >
      Çıkış Yap
    </button>
  );
};

export default LogoutButton;