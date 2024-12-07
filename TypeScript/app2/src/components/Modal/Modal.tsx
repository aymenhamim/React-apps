import { BlurLayer } from './BlurLayer.styled';
import { ModalStyled } from './Modal.styled';

type ModalProps = {
  children: React.ReactNode;
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

function Modal({ children, isOpen, setIsOpen }: ModalProps) {
  if (!isOpen) return null;

  return (
    <>
      {isOpen && (
        <div>
          <BlurLayer onClick={() => setIsOpen(false)} />
          <ModalStyled onClick={e => e.stopPropagation()}>
            <span id="close" onClick={() => setIsOpen(false)}>
              X
            </span>
            {children}
          </ModalStyled>
        </div>
      )}
    </>
  );
}

export { Modal };
