import React, { useState } from "react";

const Modal = (open, component) => {
  const [open, isOpen] = useState(open);
  const handleClick = () => {
    isOpen(false);
  };
  return (
    <>
      {open && (
        <div><Image src="close.png" onClick={handleClick}/>
          <component />
        </div>
      )}
    </>
  );
};

export default Modal;
