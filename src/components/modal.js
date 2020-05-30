import React from 'react';
const Modal = ({ color, message }) => {
  let autoClass = `modal-${color} `;
  return <div className={autoClass + 'modal-both-cases'}>{message}</div>;
};

export default Modal;
