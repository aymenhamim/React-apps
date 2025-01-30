import Skeleton from './Skeleton';
import { motion } from 'framer-motion';
import { useState } from 'react';

const App = () => {
  const [isOpened, setIsOpened] = useState(false);

  return (
    <div>
      <button
        className="fixed left-1/2 top-3 z-20 -translate-x-1/2 rounded-full bg-black px-8 py-2 text-white"
        onClick={() => setIsOpened(open => !open)}
      >
        {isOpened ? 'Close' : 'Open'} drawer
      </button>

      <motion.div
        variants={{
          opened: { opacity: 1, '--x': '0%', '--y': '0%' },
          closed: { opacity: 0, '--x': '-100%', '--y': '100%' },
        }}
        initial="closed"
        animate={isOpened ? 'opened' : 'closed'}
        // Use the isOpened boolean for the animations.
        className="fixed bottom-0 left-0 max-h-[90%] w-[90%] overflow-auto bg-stone-500 p-5 max-md:translate-y-[--y] md:max-w-[500px] md:translate-x-[--x]"
      >
        <Skeleton />
      </motion.div>
    </div>
  );
};

export default App;
