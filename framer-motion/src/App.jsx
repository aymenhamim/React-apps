import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';

function App() {
  const sliderValue = useMotionValue(1);

  const opacity = useTransform(sliderValue, [0.5, 2], [0, 1]);

  const scaleSpring = useSpring(sliderValue, {
    stiffness: 300,
    damping: 10,
    mass: 0.6,
    // velocity: 0, // fels more heavy
  });

  function onRangeChange(e) {
    sliderValue.set(parseFloat(e.target.value));
  }

  return (
    <div className="flex min-h-dvh items-center justify-center bg-stone-800">
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
          whileTap={{ scale: 1.3 }}
          className="rounded-md bg-stone-800 px-5 py-2 text-stone-50"
        >
          Click me
        </motion.button>
      </div>

      <div className="p-6' mx-2 flex h-72 w-48 items-center justify-center rounded-xl bg-stone-50">
        <motion.button
          drag
          dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
          className="rounded-md bg-stone-900 px-2 py-1 text-stone-50"
          style={{
            scale: scaleSpring,
            opacity,
          }}
        >
          Click Here
        </motion.button>
      </div>
      <div className="p-6' flex h-72 w-48 items-center justify-center rounded-xl bg-stone-50">
        <input
          type="range"
          min={0.5}
          max={2}
          step={0.01}
          defaultValue={1}
          onChange={e => onRangeChange(e)}
        />
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
