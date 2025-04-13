import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import mockProducts from "./mockData";

function ProductList({ onAddToCart }) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // fetch("http://localhost:5000/api/products")
    //   .then((res) => res.json())
    //   .then((data) => setProducts(data));
    setProducts(mockProducts);
  }, []);

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
