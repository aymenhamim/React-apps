import { AnimatePresence, motion } from 'framer-motion';
import { useState } from 'react';

const buttonStyle = `mx-auto mt-6 flex justify-center rounded-lg bg-stone-800 p-3 duration-300 hover:bg-stone-700 focus:ring-4 focus:ring-stone-400`;

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const menuItems = ['Home', 'Invoices', 'Usage', 'profile', 'Settings'];

  return (
    <div className="flex min-h-dvh items-center bg-stone-50">
      <motion.nav
        initial="hidden"
        animate={`${isOpen ? 'visible' : 'hidden'}`}
        variants={{
          hidden: {
            width: 90,
            transition: {
              staggerChildren: 0.05,
              staggerDirection: -1,
              when: 'afterChildren',
            },
          },

          visible: {
            width: 150,
            transition: {
              staggerChildren: 0.05,
            },
          },
        }}
        className={`h-dvh bg-stone-900 text-stone-50`}
      >
        <button className={buttonStyle} onClick={() => setIsOpen(!isOpen)}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="4" x2="20" y1="12" y2="12" />
            <line x1="4" x2="20" y1="6" y2="6" />
            <line x1="4" x2="20" y1="18" y2="18" />
          </svg>
        </button>

        <ul className="mx-auto mt-20 w-fit">
          {menuItems.map((m, index) => (
            <motion.li
              variants={{
                hidden: { opacity: 0, x: -30 },
                visible: { opacity: 1, x: 0 },
              }}
              key={index}
              className="my-5"
            >
              {m}
            </motion.li>
          ))}
        </ul>
      </motion.nav>
    </div>
  );
}

export default App;
