import React from 'react';
import './AboutModal.css';

const AboutModal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;
  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal-content" onClick={e => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>×</button>
        <div className="modal-body">{children}</div>
      </div>
    </div>
  );
};

export default AboutModal;