import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';

function App() {
  const value = useMotionValue(0);
  const x = useSpring(value, {
    stiffness: 500,
    damping: 10,
    mass: 0.3,
  });

  const scale = useTransform(x, [-100, 0, 100], [1, 1, 2]);
  const borderRadius = useTransform(x, [-100, 0, 100], ['50%', '0%', '50%']);
  const background = useTransform(
    x,
    [-100, 0, 100],
    ['#ffffff', '#ffffff', '#f2f'],
  );

  return (
    <div className="flex min-h-dvh items-center justify-center bg-stone-800">
      <div className="p-6' mx-2 flex h-72 w-fit min-w-48 items-center justify-center rounded-xl bg-stone-50">
        <motion.button
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          className="h-20 w-20 border border-stone-950 bg-slate-200 px-2 py-1 outline-none"
          style={{
            scale,
            x,
            borderRadius,
            background,
          }}
        ></motion.button>
      </div>

      {/* <div className="p-6' flex h-72 w-48 items-center justify-center rounded-xl bg-stone-50">
        <input
          type="range"
          min={0.5}
          max={2}
          step={0.01}
          defaultValue={1}
          onChange={e => onRangeChange(e)}
        />
      </div> */}

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
