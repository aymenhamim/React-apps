// import { GlobalStyle } from './GlobalStyle';
import { DashboardHeader } from './components/dashboard-header/index';
import { Checkbox } from './components/checkbox';
import { Modal } from './components/Modal';

function App() {
  return (
    <>
      {/* <main>
        <DashboardHeader userName="aymen hamim" />
      </main> */}

      <Modal setIsOpen={() => false} isOpen={true}>
        <Checkbox />
      </Modal>
    </>
  );
}

export default App;
