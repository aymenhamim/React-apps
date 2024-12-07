import { useState } from 'react';
import { Modal } from './components/Modal';

function Test() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div>
      <button onClick={() => setIsModalOpen(true)}>Open Modal</button>

      <Modal isOpen={isModalOpen} setIsOpen={setIsModalOpen}>
        <p>This is A Modal</p>
      </Modal>
    </div>
  );
}

export default Test;
