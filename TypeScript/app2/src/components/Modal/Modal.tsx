import { useState } from 'react';
import { BlurLayer } from './BlurLayer.styled';
import { ModalStyled } from './Modal.styled';

type ModalProps = {
  children: React.ReactNode;
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

function Modal({ children }: ModalProps) {
  const [isOpen, SetIsOpen] = useState(true);

  function handleClose() {
    SetIsOpen(false);
  }

  return (
    <>
      {isOpen && (
        <>
          <BlurLayer />
          <ModalStyled>
            <span id="close" onClick={handleClose}>
              X
            </span>
            {children}
          </ModalStyled>
        </>
      )}
    </>
  );
}

export { Modal };