// import Button from './components/button/Button';
// import DragDrop from './components/drag-drop/drag-drop';
// import DragAndDropPicture from './components/drop-zone/drop-zone';
// import FileUpload from './components/file-upload/file-upload';
// import Table from './components/pagination/ui/table';

import Pagination from './components/pagination/ui/pagination';

const App: React.FC = () => {
  return (
    <div>
      {/* <div style={{ maxWidth: '600px', margin: '50px auto' }}>
        <h1>Drag & Drop File Upload</h1>
        <FileUpload />
      </div> */}
      {/* <DragDrop name="test" /> */}

      {/* Drag & drop */}

      {/* <h1 style={{ margin: '2rem auto', textAlign: 'center' }}>
        Updlaod files
      </h1>
      <DragAndDropPicture /> */}

      {/* Pagination */}

      <Pagination />
    </div>
  );
};

export default App;
