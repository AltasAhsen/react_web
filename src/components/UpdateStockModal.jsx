import React, { useState } from "react";

function UpdateStockModal({ product, onUpdate, onClose }) {
  const [newStock, setNewStock] = useState(product.stock);

  const handleUpdate = () => {
    onUpdate(product.id, newStock);
    onClose();
  };

  return (
    <div className="modal show d-block" tabIndex="-1" role="dialog" style={{ backgroundColor: "rgba(0,0,0,0.5)" }}>
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Update Stock for {product.name}</h5>
            <button type="button" className="btn-close" onClick={onClose}></button>
          </div>
          <div className="modal-body">
            <input
              type="number"
              className="form-control"
              value={newStock}
              onChange={(e) => setNewStock(Number(e.target.value))}
            />
          </div>
          <div className="modal-footer">
            <button className="btn btn-secondary" onClick={onClose}>Cancel</button>
            <button className="btn btn-primary" onClick={handleUpdate}>Update</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UpdateStockModal;
