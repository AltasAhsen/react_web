import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function AdminNavbar() {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleMenu = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        <Link className="navbar-brand" to="/admin/products">Admin Panel</Link>
        
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
        <div className={`collapse navbar-collapse ${isExpanded ? 'show' : ''}`}>
          <ul className="navbar-nav me-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/admin/products" onClick={() => setIsExpanded(false)}>
                Ürünler
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/admin/orders" onClick={() => setIsExpanded(false)}>
                Siparişler
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/admin/users" onClick={() => setIsExpanded(false)}>
                Kullanıcılar
              </Link>
            </li>
          </ul>
          
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link 
                className="nav-link btn btn-outline-light ms-lg-2 mt-2 mt-lg-0" 
                to="/"
                onClick={() => setIsExpanded(false)}
              >
                Siteye Dön
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default AdminNavbar;