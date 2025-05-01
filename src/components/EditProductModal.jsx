import React, { useState } from "react";

////////////////////backend entegre edilmeli

function EditProductModal({ product, onUpdate, onClose }) {
  const [updatedProduct, setUpdatedProduct] = useState({ ...product });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUpdatedProduct({ ...updatedProduct, [name]: value });
  };

  const handleSave = () => {
    onUpdate(updatedProduct);
    onClose();
  };

  return (
    <div className="modal show d-block" tabIndex="-1" style={{ backgroundColor: "rgba(0,0,0,0.5)" }}>
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Edit Product</h5>
            <button type="button" className="btn-close" onClick={onClose}></button>
          </div>
          <div className="modal-body">
            <input name="name" className="form-control mb-2" value={updatedProduct.name} onChange={handleChange} />
            <input name="price" type="number" className="form-control mb-2" value={updatedProduct.price} onChange={handleChange} />
            <input name="stock" type="number" className="form-control mb-2" value={updatedProduct.stock} onChange={handleChange} />
            <input name="img_url" className="form-control mb-2" value={updatedProduct.img_url} onChange={handleChange} />
          </div>
          <div className="modal-footer">
            <button className="btn btn-secondary" onClick={onClose}>Cancel</button>
            <button className="btn btn-primary" onClick={handleSave}>Save Changes</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EditProductModal;
