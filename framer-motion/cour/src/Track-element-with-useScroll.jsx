import { motion, useScroll, useMotionValueEvent } from 'framer-motion';
import { div } from 'framer-motion/client';
import { useState, useRef } from 'react';

const App = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });
  const [y, setY] = useState(0);

  useMotionValueEvent(scrollYProgress, 'change', y => setY(y.toFixed(2)));

  return (
    <div className="flex min-h-[300vh] justify-center bg-stone-900 text-2xl text-white">
      <div className="fixed top-0">{y}</div>

      <div
        className="mt-[110vh] h-[50vh] w-1/2 rounded-2xl bg-gray-300"
        ref={ref}
      ></div>
    </div>
  );
};

export default App;
