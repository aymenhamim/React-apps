import { motion, useScroll, useSpring } from 'framer-motion';

// A small placeholder component to give us some room to scroll.
const Placeholder = () => (
  <div className="aspect-video w-[600px] max-w-[80%] rounded-lg bg-slate-300 opacity-30" />
);

export const App = () => {
  const { scrollYProgress } = useScroll();

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 10,
    mass: 0.5,
  });

  // const scaleX = useMotionValue(scale);

  return (
    <main className="bg-purple-950">
      <div className="sticky top-0 z-10 p-2">
        <motion.div
          className="h-3 w-full origin-left rounded-lg bg-white"
          style={{ scaleX }}
        />
      </div>

      <div className="mx-auto h-screen w-fit text-2xl font-bold text-white">
        SCROLL DOWN
      </div>

      <div className="flex flex-col items-center space-y-2">
        <p className="my-6 text-white">
          Time to make some progress and start scrolling... 😉
        </p>
        <Placeholder />
        <Placeholder />
        <Placeholder />
        <Placeholder />
        <Placeholder />
        <Placeholder />
        <Placeholder />
      </div>

      <div className="h-screen" />
    </main>
  );
};

export default App;
