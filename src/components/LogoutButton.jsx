import React from "react";
import { useNavigate } from "react-router-dom";
// import { authApi } from "../services/api";

const LogoutButton = ({ setIsLoggedIn }) => {
  const navigate = useNavigate();

  const handleLogout = async () => {
    // Back-end entegrasyonu için:
    /*
    try {
      await authApi.logout();
    } catch (err) {
      console.error("Logout error:", err);
    }
    */
    
    localStorage.removeItem("authToken");
    localStorage.removeItem("userProfile");
    setIsLoggedIn(false);
    navigate("/");
  };

  return (
    <button className="nav-link btn btn-link" onClick={handleLogout}>
      Logout
    </button>
  );
};

export default LogoutButton;