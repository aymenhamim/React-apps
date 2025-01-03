import { useState } from 'react';
import { motion } from 'framer-motion';

function App() {
  return (
    <div className="flex min-h-dvh items-center justify-center bg-slate-50">
      <div className="w flex h-72 w-[500px] items-center justify-center bg-slate-300 p-10">
        <motion.button
          initial={{
            y: -500,
          }}
          animate={{
            opacity: 1,
            y: 0,
            x: 0,

            // y: [200, -100, 50, 0],
            // x: [100, 30, -20, 0],
            // opacity: [1, 0.5, 1, 0, 1],
            // transition: {
            //   duration: 1.5,
            //   ease: 'easeInOut',
            //   repeat: 5,
            //   repeatDelay: 0.5,
            //   repeatType: 'mirror',
            // },
          }}
          whileTap={{ scale: 1.1 }}
          className="rounded-md bg-stone-800 px-5 py-2 text-stone-50"
        >
          Click me
        </motion.button>
      </div>

      <div className="flex min-h-screen items-center justify-center">
        <motion.div
          className="h-24 w-24 bg-gray-400"
          animate={{
            scale: [1, 2, 2, 1, 1],
            rotate: [0, 0, 180, 180, 0],
            borderRadius: ['0%', '0%', '50%', '50%', '0%'],
          }}
          transition={{
            duration: 2,
            ease: 'easeInOut',
            repeat: Infinity,
            repeatDelay: 1,
            times: [0, 0.5, 0.75, 0.875, 1],
          }}
        />
        <motion.div
          className="h-24 w-24 bg-black"
          animate={{
            scale: [1, 2, 2, 1, 1],
            rotate: [0, 0, 180, 180, 0],
            borderRadius: ['0%', '0%', '50%', '50%', '0%'],
          }}
          transition={{
            duration: 2,
            ease: 'easeInOut',
            repeat: Infinity,
            repeatDelay: 1,
          }}
        />
      </div>
    </div>
  );
}

export default App;
