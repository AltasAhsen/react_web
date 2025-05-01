import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import mockProducts from "./mockData";
// import { productApi } from "../services/api";

function ProductDetail({ onAddToCart }) {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    
    // Back-end entegrasyonu için:
    /*
    productApi.getById(id)
      .then(response => {
        setProduct(response.data);
        setLoading(false);
      })
      .catch(err => {
        setError(err.message);
        setLoading(false);
      });
    */
    
    // Mock data kullanımı (geçici çözüm)
    const selectedProduct = mockProducts.find((p) => p.id === parseInt(id));
    setProduct(selectedProduct);
    setLoading(false);
  }, [id]);

  if (loading) return <div className="container mt-4">Loading...</div>;
  if (error) return <div className="container mt-4">Error: {error}</div>;
  if (!product) return <div className="container mt-4">Product not found</div>;

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