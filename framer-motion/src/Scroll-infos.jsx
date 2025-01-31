import {
  motion,
  useInView,
  useMotionValue,
  useMotionValueEvent,
  useScroll,
  useSpring,
  useTransform,
} from 'framer-motion';
import { useState } from 'react';

function App() {
  const {
    // number between 0 and 1
    scrollYProgress,
    scrollXProgress,
    // the number of pixels that you've scrolled
    scrollY,
    scrollX,
  } = useScroll();

  const [x, setX] = useState(0);
  const [y, setY] = useState(0);
  const [xProgress, setXProgress] = useState(0);
  const [yProgress, setYProgress] = useState(0);

  useMotionValueEvent(scrollX, 'change', x => setX(x));
  useMotionValueEvent(scrollY, 'change', y => setY(y));

  useMotionValueEvent(scrollXProgress, 'change', xp => setXProgress(xp));
  useMotionValueEvent(scrollYProgress, 'change', yp => setYProgress(yp));

  console.log(scrollY);

  return (
    <div className="flex min-h-screen w-full flex-col items-center justify-center bg-violet-950 text-white">
      <div className="fixed right-2 top-0 mt-2 rounded-lg bg-stone-900 px-3 py-2 ring-1 ring-white">
        x: {x} <br />
        y: {y} <br />
        xProgress: {xProgress} <br />
        yProgress: {yProgress} <br />
      </div>
      <div className="sticky top-0 z-10 p-2"></div>
      <div className="h-screen" />
      <div className="h-screen" />
      <div className="h-screen" />
      <div className="text-2xl">Hello world</div>
    </div>
  );
}

export default App;
