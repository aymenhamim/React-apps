import { motion, useInView } from 'framer-motion';
import { useEffect, useRef } from 'react';
import { useSound } from './use-in-view-tp/use-sound';

function App() {
  const imgRef = useRef(null);
  const isInView = useInView(imgRef, { amount: 0.5 });
  const [playShutter] = useSound('/shutter.mp3');

  useEffect(() => {
    if (isInView) {
      playShutter();
    }
  }, [isInView]);

  return (
    <div className="mx-auto max-w-[640px] bg-stone-900 px-8 py-8">
      <div className="-rotate-3 bg-gradient-to-br from-slate-100 to-slate-400 p-8 text-lg text-black shadow-2xl">
        <p className="mb-4 h-screen text-4xl font-bold leading-[1.1]">
          That beautiful cabin on that idyllic lake..
        </p>
        <p className="mb-3 mt-4">
          Last summer, I escaped to a remote cabin nestled along the serene
          shores of a hidden fjord. Each morning, I woke up to the soft glow of
          dawn, painting the sky in pastel hues of pink and orange, interior and
          rustic charm, was the perfect retreat from the hustle reflecting off
          the tranquil water. The red cabin, with its cozy and bustle of
          everyday life.
        </p>
        <p>
          Surrounded by towering mountains and the gentle sound of lapping
          waves, I spent my days exploring the rugged landscape and evenings
          curled up with a good book by the fire. It was a slice of paradise, a
          place where time seemed to stand still, allowing me to savor each
          peaceful moment.
        </p>
      </div>
      <motion.img
        variants={{
          visible: { opacity: 1, rotate: 5, scale: 1 },
          hidden: { opacity: 0, rotate: 0, scale: 0.9 },
        }}
        animate={isInView ? 'visible' : 'hidden'}
        ref={imgRef}
        className="relative z-10 w-[80%] border-8 border-white shadow-2xl"
        src="/img/house-lake.jpg"
        alt="House on a lake"
      />
      <div className="mt-96 h-screen" />
    </div>
  );
}

export default App;
