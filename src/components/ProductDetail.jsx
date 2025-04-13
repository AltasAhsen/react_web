import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import mockProducts from "./mockData";

function ProductDetail() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    // fetch(`https://localhost:5001/api/products/${id}`)
    //   .then((response) => response.json())
    //   .then((data) => setProduct(data));
    const selectedProduct = mockProducts.find((p) => p.id === parseInt(id));
    setProduct(selectedProduct);
  }, [id]);

  if (!product) {
    return <div className="container mt-4">Loading...</div>;
  }

  return (
    <div className="container mt-4">
      <div className="card">
        <div className="card-body">
          <h2 className="card-title">{product.name}</h2>
          <p className="card-text">{product.description}</p>
          <p className="card-text">Price: ${product.price}</p>
          <button className="btn btn-success">Add to Cart</button>
        </div>
      </div>
    </div>
  );
}

export default ProductDetail;