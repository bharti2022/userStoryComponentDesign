import React, { useState } from "react";

const Modal = ({open, ModalComponent}:{open:boolean, ModalComponent:any}) => {
  const [open, isOpen] = useState(open);
  const handleClick = () => {
    isOpen(false);
  };
  return (
    <>
      {open && (
        <div>
          <Image src="close.png" onclick={handleClick}/>
          <ModalComponent />
        </div>
      )}
    </>
  );
};

export default Modal;
