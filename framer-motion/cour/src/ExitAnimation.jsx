import { AnimatePresence, motion } from 'framer-motion';
import { useState } from 'react';

function App() {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div className="flex min-h-dvh items-center justify-center bg-purple-950">
      <div className="mx-2 flex min-h-[25rem] min-w-[24rem] flex-col items-center gap-10 rounded-xl bg-stone-200 px-20 py-10">
        <motion.button
          className="rounded-full border border-stone-950 bg-stone-800 px-3 py-2 text-stone-50 outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          Toggle Visibility
        </motion.button>

        <AnimatePresence initial={false}>
          {isOpen && (
            <motion.div
              className="flex flex-col rounded-lg bg-stone-50 px-6 py-4 shadow-sm"
              exit={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              initial={{ opacity: 0, scale: 0.7 }}
            >
              <div className="mb-3 h-28 w-44 rounded-md bg-stone-500"></div>

              <p>Random card</p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}

export default App;
