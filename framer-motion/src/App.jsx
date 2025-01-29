import { AnimatePresence, motion } from 'framer-motion';
import { useState } from 'react';

function App() {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div className="flex min-h-dvh items-center justify-center bg-slate-500">
      <div className="mx-2 flex min-h-[25rem] min-w-[24rem] flex-col items-center gap-10 rounded-xl bg-stone-100 px-20 py-10">
        <motion.button
          className="rounded-full border border-stone-950 bg-stone-800 px-3 py-2 text-stone-50 outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          Toggle Visibility
        </motion.button>

        <AnimatePresence initial={false}>
          {isOpen && (
            <motion.div
              variants={{
                open: { opacity: 1, y: 0 },
                closed: { opacity: 0, y: 20 },
              }}
              initial="closed"
              animate="open"
              exit="closed"
              className="relative flex flex-col rounded-lg border border-stone-600 bg-stone-50 px-8 py-6 shadow-sm"
            >
              <motion.button
                variants={{
                  open: { scale: 1, rotate: 0 },
                  closed: { scale: 0, rotate: 360 },
                }}
                onClick={() => setIsOpen(false)}
                className="BG-stone-50 absolute right-0.5 top-1 h-7 w-7 rounded-full border border-stone-800 bg-stone-900 font-bold text-stone-50"
              >
                X
              </motion.button>
              <motion.div
                variants={{
                  open: { opacity: 1, y: 0 },
                  closed: { opacity: 0, y: 20 },
                }}
                className="mb-3 h-28 w-44 rounded-md bg-stone-500"
              ></motion.div>

              <p>Random card</p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}

export default App;
