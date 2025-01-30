import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

function App() {
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 1 });
  return (
    <div className="flex flex-col items-center justify-center bg-stone-800 px-8 text-white">
      <div className="fixed top-0 text-2xl text-white">{`${isInView}`}</div>
      <div className="h-screen place-items-center" />
      <div className="text-5xl" ref={ref}>
        📸
      </div>
      <div className="h-screen place-items-center" />
    </div>
  );
}

export default App;
