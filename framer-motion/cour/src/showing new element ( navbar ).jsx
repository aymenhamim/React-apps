import { AnimatePresence, motion } from 'framer-motion';
import { useState } from 'react';

const portfolioLinks = [
  'Google',
  'Facebook',
  'Amazon',
  'Microsoft',
  'Apple',
  'Tesla',
];

export const App = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex h-screen items-center justify-center bg-stone-900">
      <AnimatePresence>
        <motion.div
          layout
          className="flex flex-col overflow-clip bg-white p-4"
          style={{
            borderRadius: isOpen ? 32 : 12,
          }}
        >
          {isOpen && (
            <motion.div
              layout
              initial="closed"
              animate="open"
              exit="closed"
              variants={{
                open: {
                  opacity: 1,
                },
                closed: {
                  opacity: 0,
                },
              }}
              transition={{
                staggerChildren: 0.05,
                delayChildren: 0.2,
              }}
              className="mb-8 grid w-[600px] grid-cols-2 gap-4 *:rounded-xl *:bg-white *:px-4 *:py-2"
            >
              {portfolioLinks.map(linkTitle => (
                <motion.a
                  key={linkTitle}
                  href="#"
                  variants={{
                    open: { y: 0 },
                    closed: { y: 20 },
                  }}
                >
                  {linkTitle}
                </motion.a>
              ))}
            </motion.div>
          )}

          <motion.ol
            layout
            className="mx-auto flex gap-4 *:rounded-3xl *:p-2 *:transition-colors hover:*:bg-gray-300"
          >
            <li>
              <a>Home</a>
            </li>
            <li>
              <button
                className="flex items-center gap-1"
                onClick={() => setIsOpen(!isOpen)}
              >
                Portfolio
              </button>
            </li>
            <li>
              <a>Contact</a>
            </li>
          </motion.ol>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default App;
