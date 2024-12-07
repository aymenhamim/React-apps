import { useState } from 'react';
import Button from './components/button/Button';
import { Modal } from './components/Modal/Modal';
import Test from './Test';

function App() {
  const [isOpen1, setIsOpen1] = useState(false);

  // useEffect(() => {
  //   const closeModal = () => {
  //     setIsOpen(true);
  //     console.log(isOpen);
  //   };
  // }, [isOpen]);

  return (
    <>
      <main>
        <Button handleClick={() => setIsOpen1(true)}>
          <span>👉 </span>
          <span>Click Me </span>
          <span> 👈</span>
        </Button>

        <Modal isOpen={isOpen1} setIsOpen={setIsOpen1}>
          <h2>Hello</h2>
          <br />
          <Button handleClick={() => setIsOpen1(false)}>
            <span>👉 </span>
            <span>Click Me </span>
            <span> 👈</span>
          </Button>
        </Modal>
      </main>

      <Test />
    </>
  );
}

export default App;
