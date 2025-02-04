import { motion } from 'framer-motion';

export const App = () => {
  return (
    <div className="bg-stone-800 px-8 text-white">
      <div className="grid h-screen place-items-center">Scroll down :)</div>
      <motion.div
        variants={{
          visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
          hidden: {
            opacity: 0,
            transition: {
              staggerChildren: 0.1,
              staggerDirection: -1,
              when: 'afterChildren',
            },
          },
        }}
        whileInView="visible"
        initial="hidden"
        animate="hidden"
        /* Ssst. This property isn't there. Just leave it at one, and I'll explain later ;) */
        viewport={{ amount: 1 }}
        className="space-between grid w-full grid-cols-4 justify-center gap-2"
      >
        {[1, 2, 3, 4].map(i => (
          <motion.div
            variants={{
              visible: { x: 0, opacity: 1 },
              hidden: { x: -40, opacity: 0 },
            }}
            key={i}
            className="aspect-square rounded-xl bg-[rgba(255,255,255,.3)]"
          />
        ))}
      </motion.div>
      <div className="grid h-screen place-items-center">Scroll up :)</div>
    </div>
  );
};

export default App;
