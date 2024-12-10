import { Checkbox } from './components/checkbox';
import { Modal } from './components/Modal';

function App() {
  return (
    <>
      <Modal setIsOpen={() => false} isOpen={true}>
        <Checkbox size="sm" id="true" disabled={false} />
        <label htmlFor="true">Click me</label>
        <br />
        <input type="checkbox" />
        <label htmlFor="true">Click me</label>
        <br />
      </Modal>
    </>
  );
}

export default App;
