import {
  motion,
  useInView,
  useMotionValue,
  useScroll,
  useSpring,
} from 'framer-motion';
import { useEffect, useRef } from 'react';
import { useSound } from './use-in-view-tp/use-sound';

function App() {
  const {
    // number between 0 and 1
    scrollXProgress,
    scrollYProgress,
    // the number of pixels that you've scrolled
    scrollX,
    scrollY,
  } = useScroll();
  const scaleX = useSpring(scrollYProgress);
  console.log(scrollYProgress);

  return (
    <div className="flex min-h-screen w-full flex-col items-center justify-center bg-violet-950 text-white">
      <div className="sticky top-0 z-10 p-2">
        <motion.div
          style={{ scaleX }}
          className="h-2 w-full origin-left bg-white"
        />
      </div>
      <div className="h-screen" />
      <div className="h-screen" />
      <div className="h-screen" />
      <div className="text-2xl">Hello world</div>
    </div>
  );
}

export default App;
