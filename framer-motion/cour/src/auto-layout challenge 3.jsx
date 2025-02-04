import { motion } from 'framer-motion';
import { useState } from 'react';

const App = () => {
  const [isSmall, setIsSmall] = useState(true);

  return (
    <div className="grid h-screen w-full items-center justify-center bg-stone-900">
      <motion.div
        layout
        onClick={() => setIsSmall(s => !s)}
        className="relative grid h-[200px] origin-bottom cursor-pointer place-items-center bg-white"
        animate={{
          borderRadius: isSmall ? 20 : 50,
        }}
        style={{
          width: isSmall ? 200 : 400,
          height: isSmall ? 200 : 400,
        }}
      >
        <motion.span layout className="block">
          Click me 👀
        </motion.span>
      </motion.div>
    </div>
  );
};
export default App;
