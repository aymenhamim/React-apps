import { useState } from 'react';
import Button from './components/button/Button';
import { Modal } from './components/Modal/Modal';
import { GlobalStyle } from './GlobalStyle';

function App() {
  const [isOpen1, setIsOpen1] = useState(false);

  return (
    <>
      <GlobalStyle />
      <main>
        <Button onClick={() => setIsOpen1(true)} corner="pill" type="primary">
          <span>👉 </span>
          <span>Click Me </span>
          <span> 👈</span>
        </Button>
        <br />
        <br />

        <Modal isOpen={isOpen1} setIsOpen={setIsOpen1}>
          <h2>Click From the Button</h2>

          <Button onClick={() => setIsOpen1(true)}>
            <span>Submit </span>
          </Button>
        </Modal>

        <Button
          onClick={() => setIsOpen1(true)}
          corner="smooth"
          type="secondary"
        >
          <span>👉 </span>
          <span>Click Me </span>
          <span> 👈</span>
        </Button>
      </main>
    </>
  );
}

export default App;
