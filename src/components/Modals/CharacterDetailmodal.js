
import React from "react";
import "./CharacterModal.css";

const Modal = ({ show, handleClose, children }) => {
  return (
    <div className={`modal ${show ? "display-block" : "display-none"}`}>
      <section className="modal-main">
        {children}
        <button onClick={handleClose} className="modal-btn">Close</button>
      </section>
    </div>
  );
};

export default Modal;
