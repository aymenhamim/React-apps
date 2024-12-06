import { useState } from 'react';
import Button from './components/button/Button';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1>React with TypeScript ⚛️</h1>

      <Button fontSize={20} variant="sm" type="principal" setCount={setCount}>
        <span>👉 </span>
        <span>Click Me </span>
        <span> 👈</span>
      </Button>
    </>
  );
}

export default App;
