import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import mockProducts from "./mockData";
// import { productApi } from "../services/api";

function ProductList({ onAddToCart }) {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    
    // Back-end entegrasyonu için:
    /* 
    productApi.getAll()
      .then(response => {
        setProducts(response.data);
        setLoading(false);
      })
      .catch(err => {
        setError(err.message);
        setLoading(false);
      });
    */
    
    // Mock data kullanımı (geçici çözüm)
    setProducts(mockProducts);
    setLoading(false);
  }, []);

  if (loading) return <div className="container mt-4">Loading...</div>;
  if (error) return <div className="container mt-4">Error: {error}</div>;

  return (
    <div className="container mt-4">
      <h2 className="text-center mb-4">Products</h2>
      <div className="row">
        {products.map((product) => (
          <div key={product.id} className="col-md-4 mb-4">
            <div className="card h-100">
              <img
                src={product.img_url}
                className="card-img-top"
                alt={product.name}
                style={{
                  height: "200px",
                  width: "100%",
                  objectFit: "contain",
                  padding: "10px",
                  backgroundColor: "#f8f9fa",
                  borderRadius: "10px",
                  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
                }}
              />
              <div className="card-body">
                <h5 className="card-title">{product.name}</h5>
                <p className="card-text">${product.price}</p>
                <Link to={`/product/${product.id}`} className="btn btn-primary">View Details</Link>
                <button className="btn btn-success ms-2" onClick={() => onAddToCart(product)}>Add to Cart</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductList;