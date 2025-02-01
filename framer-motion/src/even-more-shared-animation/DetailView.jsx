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
        {song.title}
      </motion.div>
      <motion.div
        layout
        layoutId={`music-artist-${song.id}`}
        className="text-sm"
      >
        {song.artist}
      </motion.div>

      <p className="max-w-[80%] text-sm">{song.description}</p>
      <motion.button
        onClick={onClose}
        className="mt-4 w-full rounded-full bg-black px-4 py-2 text-white"
        variants={{
          hidden: { opacity: 0, y: 50 },
          visible: { opacity: 1, y: 0 },
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
