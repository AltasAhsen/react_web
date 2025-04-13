import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import mockProducts from "./mockData";

function ProductDetail({ onAddToCart }) {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    // fetch(`http://localhost:5000/api/products/${id}`)
    //   .then((res) => res.json())
    //   .then((data) => setProduct(data));
    const selectedProduct = mockProducts.find((p) => p.id === parseInt(id));
    setProduct(selectedProduct);
  }, [id]);

  if (!product) return <div className="container mt-4">Loading...</div>;

  return (
    <div className="container mt-4">
      <div className="card">
        <img
          src={product.img_url}
          className="card-img-top"
          alt={product.name}
          style={{
            height: "300px",
            width: "100%",
            objectFit: "contain",
            padding: "20px",
            backgroundColor: "#f8f9fa",
            borderRadius: "10px",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
            marginBottom: "15px",
          }}
        />
        <div className="card-body">
          <h2 className="card-title">{product.name}</h2>
          <p className="card-text">{product.description}</p>
          <p className="card-text">Price: ${product.price}</p>
          <button className="btn btn-success" onClick={() => onAddToCart(product)}>Add to Cart</button>
        </div>
      </div>
    </div>
  );
}

export default ProductDetail;
