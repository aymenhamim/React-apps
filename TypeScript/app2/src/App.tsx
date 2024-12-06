import Button from './components/button/Button';
import { Modal } from './components/Modal/Modal';

function App() {
  return (
    <>
      <main>
        <Button>
          <span>👉 </span>
          <span>Click Me </span>
          <span> 👈</span>
        </Button>
        <Button>
          <span>👉 </span>
          <span>Click Me </span>
          <span> 👈</span>
        </Button>
        <Button>
          <span>👉 </span>
          <span>Click Me </span>
          <span> 👈</span>
        </Button>
        <Modal>
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
