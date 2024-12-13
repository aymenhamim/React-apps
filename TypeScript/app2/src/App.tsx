import Button from './components/button/Button';
import DragDrop from './components/drag-drop/drag-drop';
import FileUpload from './components/file-upload/file-upload';

const App: React.FC = () => {
  return (
    <div>
      <div style={{ maxWidth: '600px', margin: '50px auto' }}>
        <h1>Drag & Drop File Upload</h1>
        <FileUpload />
      </div>
      {/* <DragDrop name="test" /> */}
    </div>
  );
};

export default App;
