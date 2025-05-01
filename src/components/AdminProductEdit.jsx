import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
// import API from "../api/api"; // Gerçek backend varsa kullan
import mockProducts from "./mockData"; // Şimdilik mock

const AdminProductEdit = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    // Şimdilik mock veriyle id'ye göre ürünü buluyoruz
    const found = mockProducts.find((p) => p.id === parseInt(id));
    setProduct(found || null);
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct({ ...product, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Güncellenen ürün:", product);

    // Burada API çağrısı yapabilirsin: API.put(`/products/${product.id}`, product)

    alert("Ürün güncellendi!");
    navigate("/admin/products");
  };

  if (!product) return <div className="container mt-4">Ürün bulunamadı.</div>;

  return (
    <div className="container mt-4">
      <h2>Ürünü Güncelle</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label>Ürün Adı</label>
          <input
            type="text"
            name="name"
            className="form-control"
            value={product.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label>Fiyat</label>
          <input
            type="number"
            name="price"
            className="form-control"
            value={product.price}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label>Stok</label>
          <input
            type="number"
            name="stock"
            className="form-control"
            value={product.stock}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit" className="btn btn-success">Güncelle</button>
      </form>
    </div>
  );
};

export default AdminProductEdit;
