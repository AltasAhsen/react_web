import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import mockProducts from "./mockData";

function ProductList() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // fetch("https://localhost:5001/api/products")
    //   .then((response) => response.json())
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
                  <div className="card-body">
                    <h5 className="card-title">{product.name}</h5>
                    <p className="card-text">${product.price}</p>
                    <Link to={`/product/${product.id}`} className="btn btn-primary">
                      View Details
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
    );
}

export default ProductList;