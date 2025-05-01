import React from "react";
import { useNavigate } from "react-router-dom";
import AdminProductList from "./AdminProductList";

const AdminProductPage = () => {
  const navigate = useNavigate();

  const handleEditProduct = (product) => {
    navigate(`/admin/products/edit/${product.id}`);
  };

  const handleDeleteProduct = (productId) => {
    console.log("Silinecek ürün ID:", productId);
    alert(`Ürün siliniyor, ID: ${productId}`);
  };

  const handleUpdateStock = (productId) => {
    console.log("Stok güncellenecek ürün ID:", productId);
    alert(`Stok güncelleniyor, ID: ${productId}`);
  };

  return (
    <div>
      <AdminProductList
        onEdit={handleEditProduct}
        onDelete={handleDeleteProduct}
        onStockUpdate={handleUpdateStock}
      />
    </div>
  );
};

export default AdminProductPage;
