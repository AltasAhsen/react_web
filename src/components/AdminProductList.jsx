import React, { useEffect, useState } from "react";
// import API from "../api/api"; // gerçek backend için
import mockProducts from "./mockData";

function AdminProductList({ onEdit, onDelete, onStockUpdate }) {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // API.get("/products") kısmı örnek:
    /*
    API.get("/products")
      .then((res) => {
        setProducts(res.data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
    */

    // Mock veri kullanılıyor
    setProducts(mockProducts);
    setLoading(false);
  }, []);

  const handleEdit = (product) => {
    if (onEdit) {
      onEdit(product);
    } else {
      console.log("Düzenle butonuna tıklandı:", product);
    }
  };

  const handleDelete = (productId) => {
    if (onDelete) {
      onDelete(productId);
    } else {
      console.log("Sil butonuna tıklandı, id:", productId);
    }
  };

  const handleStockUpdate = (productId) => {
    if (onStockUpdate) {
      onStockUpdate(productId);
    } else {
      console.log("Stok güncelleme butonuna tıklandı, id:", productId);
    }
  };

  if (loading) return <div className="container mt-4">Yükleniyor...</div>;
  if (error) return <div className="container mt-4">Hata: {error}</div>;

  return (
    <div className="container mt-4">
      <h2 className="text-center mb-4">Admin - Ürün Yönetimi</h2>
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
                  objectFit: "contain",
                  padding: "10px",
                  backgroundColor: "#f8f9fa",
                }}
              />
              <div className="card-body">
                <h5 className="card-title">{product.name}</h5>
                <p className="card-text">Fiyat: ${product.price}</p>
                <p className="card-text">Stok: {product.stock}</p>

                <button className="btn btn-warning btn-sm me-2" onClick={() => handleEdit(product)}>
                  Düzenle
                </button>
                <button className="btn btn-danger btn-sm me-2" onClick={() => handleDelete(product.id)}>
                  Sil
                </button>

              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AdminProductList;
