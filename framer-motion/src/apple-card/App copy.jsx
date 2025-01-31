import { motion, useInView, useScroll, useTransform } from 'framer-motion';
import { useRef, useState } from 'react';
import Card from './apple-card/Card';
import { div } from 'framer-motion/client';

function FadeIn({ children, className }) {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['end start', 'start end'],
  });
  const rotate = useTransform(
    scrollYProgress,
    [0, 0.2, 0.8, 1],
    [0, 360, 360, 0],
  );

  return (
    <motion.div className={className} ref={ref} style={{ rotate }}>
      {children}
    </motion.div>
  );
}

export const App = () => {
  const cardContainer = useRef(null);
  const inView = useInView(cardContainer, { amount: 0.3 });
  const { scrollYProgress } = useScroll({ target: cardContainer });
  return (
    <div className="bg-stone-950">
      <div className="grid h-screen place-items-center text-white">
        Gotta scroll down 👇
      </div>
      <div className="flex w-full flex-col items-center px-8">
        <motion.div
          className="relative mt-10 grid w-full max-w-[800px] grid-cols-1 gap-4 sm:h-[500px] sm:grid-cols-2 sm:grid-rows-2"
          variants={{
            hidden: {
              opacity: 0,
              transition: {
                staggerChildren: 0.1,
                staggerDirection: -1,
              },
            },
            visible: {
              opacity: 1,
              transition: { staggerChildren: 0.1 },
            },
          }}
          viewport={{ amount: 0.6 }}
          initial="hidden"
          animate="hidden"
          whileInView="visible"
        >
          <div className="row-span-2">
            <Card
              title="TryPhone 29"
              subtitle="Call me maybe"
              imageUrl="/img/img1.jpg"
            />
          </div>

          <Card
            title="BearShots Pro"
            subtitle="Ever heard better?"
            imageUrl="/img/img2.jpg"
          />
          <Card
            title="Trample Watch"
            subtitle="Right on time"
            imageUrl="/img/img3.jpg"
          />
        </motion.div>

        <div className="h-screen" />
        <div className="py-8 text-white">some space..</div>
        <div className="h-screen" />

        <motion.div
          className="relative grid w-full max-w-[800px] grid-cols-1 gap-4 sm:h-[500px] sm:grid-cols-2 sm:grid-rows-2"
          ref={cardContainer}
          variants={{
            hidden: {
              opacity: 0,
              transition: {
                staggerChildren: 0.1,
                staggerDirection: -1,
              },
            },
            visible: {
              opacity: 1,
              transition: { staggerChildren: 0.1 },
            },
          }}
          initial="hidden"
          animate={`${inView ? 'visible' : 'hidden'}`}
        >
          <FadeIn className="row-span-2">
            <Card
              title="TryPhone 29"
              subtitle="Call me maybe"
              imageUrl="/img/img1.jpg"
            />
          </FadeIn>

          <Card
            title="BearShots Pro"
            subtitle="Ever heard better?"
            imageUrl="/img/img2.jpg"
          />
          <Card
            title="Trample Watch"
            subtitle="Right on time"
            imageUrl="/img/img1.jpg"
          />
        </motion.div>
        <div className="h-screen" />

        <div className="py-24 text-white">some 👾👾👾👾</div>
      </div>
    </div>
  );
};

export default App;
