import React, { useState } from "react";
import ReactDOM from "react-dom";
import "./ActivationModal.css"; // You may style the modal here
import cross from '../../assets/images/cross.png'

const ActivationModal = ({ onClose }) => {
  const [key, setKey] = useState("");

  const handleApply = () => {
    console.log("Activation key applied:", key);
    onClose();  // Close the modal after applying
  };

  return ReactDOM.createPortal(
    <div className="modal-overlay">
      <div className="modal-content">
        <h2>Enter Activation Key</h2>
        <input
          type="text"
          value={key}
          onChange={(e) => setKey(e.target.value)}
          placeholder="Activation Key"
        />
        <button onClick={handleApply} className="apply-btn">Apply</button>
        <button onClick={onClose} className="close-btn"><img src={cross} width={30} height={30}></img> </button>
      </div>
    </div>,
    document.body
  );
};

export default ActivationModal;
