import { motion } from 'framer-motion';
import { useState } from 'react';

export const App = () => {
  const [sent, setSent] = useState(false);

  return (
    <div className="mx-auto grid min-h-dvh w-[95%] place-items-center">
      <div className="w-full max-w-[600px] rounded-2xl bg-black p-3">
        <form className="relative pr-20">
          <input
            className="bg-white-opaque w-full rounded-full px-5 py-3"
            placeholder="Email"
          />
          <motion.button
            layout
            type="button"
            style={{
              borderRadius: 999,
              backgroundColor: sent ? '#8aca65' : '#ffffff',
              color: sent ? '#fff' : '#000',
              width: sent ? '100%' : '5rem',
            }}
            onClick={() => setSent(s => !s)}
            className="absolute bottom-0 right-0 top-0 flex h-12 w-20 items-center justify-center bg-white"
          >
            <motion.span className="block" layout>
              <SendHorizontal />
            </motion.span>
            {sent && (
              <motion.span
                initial={{ opacity: 0, x: '50%' }}
                animate={{
                  opacity: 1,
                  x: 0,
                  transition: { delay: 0.3 },
                }}
                className="ml-2"
              >
                Sent!
              </motion.span>
            )}
          </motion.button>
        </form>
      </div>
    </div>
  );
};

const SendHorizontal = () => (
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
    <path d="m3 3 3 9-3 9 19-9Z" />
    <path d="M6 12h16" />
  </svg>
);

export default App;
