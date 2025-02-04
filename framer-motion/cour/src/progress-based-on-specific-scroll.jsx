import { motion, useScroll } from 'framer-motion';
import { useRef } from 'react';

// A small placeholder component to give us some room to scroll.
const Placeholder = () => (
  <div className="aspect-video w-[600px] max-w-[80%] shrink-0 rounded-lg bg-slate-300 opacity-30" />
);

export const App = () => {
  const ref = useRef(null);
  const { scrollXProgress } = useScroll({
    container: ref,
  });

  return (
    <main className="bg-slate-700 p-2">
      <div className="sticky top-0 z-10 m-2 bg-gray-300">
        <motion.div
          style={{ scaleX: scrollXProgress }}
          className="h-3 w-full origin-left bg-[#bc9e7a]"
        />
      </div>
      <p className="my-6 text-white">
        Time to make some progress and start scrolling... 😉
      </p>
      <div ref={ref} className="overflow-x-auto py-2">
        <div className="flex gap-2">
          <Placeholder />
          <Placeholder />
          <Placeholder />
          <Placeholder />
          <Placeholder />
          <Placeholder />
          <Placeholder />
        </div>
      </div>
    </main>
  );
};

export default App;
