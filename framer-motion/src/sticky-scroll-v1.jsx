import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

export const App = () => {
  const wrapperRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: wrapperRef,
    offset: ['start start', 'end start'],
  });

  // Modified transform range to keep element visible
  const x = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);

  return (
    <div className="bg-stone-950">
      <div className="h-[400px]" />
      <div className="h-screen bg-white py-5" ref={wrapperRef}>
        <motion.div
          className="sticky left-0 top-0 rounded-2xl bg-black p-3 text-white"
          style={{ x }}
        >
          Sticky div
        </motion.div>
      </div>
      <div className="my-32 h-screen" />
    </div>
  );
};

export default App;
