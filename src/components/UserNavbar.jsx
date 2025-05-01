import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function UserNavbar() {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleMenu = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <div className="container">
        <Link to="/" className="navbar-brand">E-Ticaret Sitesi</Link>
        
        {/* Toggle butonu */}
        <button 
          className="navbar-toggler" 
          type="button"
          onClick={toggleMenu}
          aria-expanded={isExpanded}
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Collapsible içerik */}
        <div className={`collapse navbar-collapse ${isExpanded ? 'show' : ''}`} id="navbarContent">
          <ul className="navbar-nav me-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/" onClick={() => setIsExpanded(false)}>Ürünler</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/cart" onClick={() => setIsExpanded(false)}>Sepetim</Link>
            </li>
          </ul>
          
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link 
                className="nav-link btn btn-outline-light ms-lg-2 mt-2 mt-lg-0" 
                to="/admin/products"
                onClick={() => setIsExpanded(false)}
              >
                Admin Paneli
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default UserNavbar;