import { useEffect, useState } from 'react';
import Button from './components/button/Button';
import { Modal } from './components/Modal/Modal';

function App() {
  const [isOpen, setIsOpen] = useState(true);

  useEffect(() => {
    const closeModal = () => {
      setIsOpen(true);
      console.log(isOpen);
    };
  }, [isOpen]);

  return (
    <>
      <main>
        <Button handleClick={closeModal}>
          <span>👉 </span>
          <span>Click Me </span>
          <span> 👈</span>
        </Button>

        <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
          Tets
        </Modal>

        <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
          <h2>Hello</h2>
          <br />
          <Button>
            <span>👉 </span>
            <span>Click Me </span>
            <span> 👈</span>
          </Button>
        </Modal>
      </main>
    </>
  );
}

export default App;
