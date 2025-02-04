import { motion } from 'framer-motion';
import { useState } from 'react';

export const App = () => {
  const [isLarge, setIsLarge] = useState(false);
  return (
    <div className="flex h-screen items-center justify-center bg-stone-900">
      <motion.div
        layout
        className="w-48 bg-white p-3"
        onClick={() => setIsLarge(!isLarge)}
        style={{
          height: isLarge ? 80 : 'auto',
        }}
      ></motion.div>
    </div>
  );
};

export default App;
