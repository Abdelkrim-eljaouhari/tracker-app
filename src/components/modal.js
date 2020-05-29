import React from 'react';
const Modal = (props) => {
  let autoClass = `modal-${props.color} `;
  return <div className={autoClass + 'modal-both-cases'}>{props.message}</div>;
};

export default Modal;
