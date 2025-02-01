import { motion, useInView, useScroll, useTransform } from 'framer-motion';
import { useRef, useState } from 'react';

export const App = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll();

  const scale = useTransform(scrollYProgress, [0, 0.05], [0.8, 1]);
  const opacity = useTransform(scrollYProgress, [0.7, 0.96], [1, 0]);

  const xRow1 = useTransform(scrollYProgress, [0.15, 0.95], [0, -300]);
  const xRow2 = useTransform(scrollYProgress, [0.4, 0.95], [0, 300]);
  const xRow3 = useTransform(scrollYProgress, [0.6, 1], [0, -500]);

  return (
    <div className="bg-stone-900">
      <div className="h-screen" />
      <div className="h-[300vh]" ref={ref}>
        <div className="sticky top-1/2 -translate-y-1/2 space-y-4 overflow-clip text-[68px] text-white">
          <motion.div
            className="flex items-center justify-center gap-6"
            style={{ scale, opacity, x: xRow1 }}
          >
            <p>HTML</p>
            <Image id={1} />
            <p>CSS</p>
            <Image id={2} />
            <p>JavaScript</p>
            <Image id={3} />
            <p>TypeScript</p>
            <Image id={4} />
            <p>HTML</p>
            <Image id={1} />
            <p>CSS</p>
            <Image id={2} />
            <p>JavaScript</p>
          </motion.div>
          <motion.div
            className="flex items-center justify-center gap-6"
            style={{ scale, opacity, x: xRow2 }}
          >
            <p>Svelte</p>
            <Image id={5} />
            <p>Vue</p>
            <Image id={6} />
            <p>React</p>
            <Image id={7} />
            <p>Angular</p>

            <Image id={8} />
            <p>Svelte</p>
            <Image id={5} />
            <p>Angular</p>
            <Image id={7} />

            <p>Vue</p>
          </motion.div>
          <motion.div
            className="flex items-center justify-center gap-6"
            style={{ scale, opacity, x: xRow3 }}
          >
            <p>Accessibility</p>
            <Image id={9} />
            <p>Performance</p>
            <Image id={10} />
            <p>SEO</p>
            <Image id={11} />
            <p>Semantics</p>
            <Image id={12} />
            <p>SEO</p>
            <Image id={11} />
            <p>Semantics</p>
            <Image id={6} />

            <p>Accessibility</p>
            <Image id={9} />
            <p>Performance</p>
          </motion.div>
        </div>
      </div>
      <div className="h-screen" />
    </div>
  );
};

const Image = ({ id }) => (
  <img
    className="h-16 w-16 shrink-0 rounded-full"
    src={`https://randomuser.me/api/portraits/women/${id}.jpg`}
    alt="Random user picture"
  />
);

export default App;
