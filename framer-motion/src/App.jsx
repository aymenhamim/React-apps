import { useState } from 'react';
import { delay, easeInOut, motion, useMotionValue } from 'framer-motion';

function App() {
  const [rotate, setRotate] = useState(0);
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);

  function handleChange(e) {
    // rotate.set(e.target.value);
    setRotate(+e.target.value);
  }
  return (
    <div className="flex min-h-dvh items-center justify-center bg-slate-50">
      <div className="w flex h-72 w-[500px] items-center justify-center bg-slate-300 p-10">
        <motion.button
          initial={{
            // y: -500,
            // x: -300,
            opacity: 0,
          }}
          whileInView={{
            x: 0,
            opacity: 1,
            transition: {
              delay: 0.3,
            },
          }}
          whileTap={{ scale: 1.1 }}
          className="rounded-md bg-stone-800 px-5 py-2 text-stone-50"
        >
          Click me
        </motion.button>

        <div>
          <input type="range" min={-180} max={190} onChange={handleChange} />

          <input
            type="range"
            min={-300}
            max={300}
            onChange={e => setX(+e.target.value)}
          />

          <input
            type="range"
            min={-300}
            max={300}
            onChange={e => setY(+e.target.value)}
          />

          <motion.div
            className="m-5 h-32 w-32 rounded-md border-4 border-red-500"
            animate={{ rotate, x, y }}
            transition={{ type: 'spring' }}
          ></motion.div>
        </div>
      </div>

      {/* <div className="flex min-h-screen items-center justify-center">
        <div className="relative flex aspect-[2/4] w-[150px] flex-col overflow-hidden rounded-2xl bg-[#41352a] text-white">
          <div className="fadeout h-full">
            <motion.div
              animate={{
                opacity: [0, 1, 1, 1, 1, 1, 0],
                scaleX: [1.5, 2, 2, 2, 1, 1],
                scaleY: [1, 1, 1, 2, 2, 2, 9],
              }}
              transition={{
                repeat: Infinity,
                duration: 3,
                ease: easeInOut,
                // repeatType: 'reverse',
              }}
              className="absolute inset-1 origin-top-left break-all text-[80px] leading-[0.8] [font-family:monospace]"
            >
              responsive
            </motion.div>
          </div>
          <motion.p className="mt-auto p-2">
            Make your animations work on all devices
          </motion.p>
        </div>
      </div> */}
    </div>
  );
}

export default App;
