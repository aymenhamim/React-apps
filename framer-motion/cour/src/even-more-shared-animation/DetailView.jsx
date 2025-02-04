import { AnimatePresence, motion } from 'framer-motion';

export const DetailView = ({ song, onClose }) => {
  return (
    <motion.div
      className="absolute inset-0 z-10 grid auto-rows-min place-items-center rounded-xl bg-white p-4 text-center text-black"
      layout
      layoutId={`music-wrapper-${song.id}`}
    >
      <motion.img
        layout
        layoutId={`music-cover-${song.id}`}
        src={song.cover}
        alt={song.title}
        className="mb-4 aspect-square w-[200px] rounded-xl"
      />

      <motion.div
        layout
        layoutId={`music-title-${song.id}`}
        className="text-lg font-bold"
      >
        <motion.span layout className="block">
          {song.title}
        </motion.span>
      </motion.div>
      <motion.div
        layout
        layoutId={`music-artist-${song.id}`}
        className="text-sm"
      >
        <motion.span layout className="block">
          {song.artist}
        </motion.span>
      </motion.div>

      <motion.p
        className="max-w-[80%] text-sm"
        variants={{
          visible: {
            opacity: 1,
            y: 0,
            transition: {
              delay: 0.3,
              type: 'spring',
            },
          },
          hidden: {
            opacity: 0,
            y: 20,
          },
        }}
        initial="hidden"
        animate="visible"
        exit="hidden"
      >
        {song.description}
      </motion.p>
      <motion.button
        onClick={onClose}
        className="mt-4 w-full rounded-full bg-black px-4 py-2 text-white"
        variants={{
          hidden: { opacity: 0, scale: 0.8 },
          visible: {
            opacity: 1,
            scale: 1,
            transition: {
              delay: 0.3,
            },
          },
        }}
        initial="hidden"
        animate="visible"
        exit="hidden"
      >
        Back
      </motion.button>
    </motion.div>
  );
};
