import { motion } from 'framer-motion';

export const SongPreview = ({ song, setSelectedSong }) => {
  return (
    <motion.div
      className="grid cursor-pointer grid-cols-1 grid-rows-2 items-center gap-x-3 rounded-xl bg-white p-4 text-black md:grid-cols-[auto_1fr]"
      onClick={() => setSelectedSong(song)}
      layout
      layoutId={`music-wrapper-${song.id}`}
    >
      <motion.img
        layoutId={`music-cover-${song.id}`}
        src={song.cover}
        alt={song.title}
        className="row-span-2 h-8 w-8 rounded-xl"
      />

      <motion.div
        layoutId={`music-title-${song.id}`}
        className="text-lg font-bold leading-snug"
      >
        <motion.span layout className="block">
          {song.title}
        </motion.span>
      </motion.div>
      <motion.div
        layoutId={`music-artist-${song.id}`}
        className="text-sm leading-snug"
      >
        <motion.span layout className="block">
          {song.artist}
        </motion.span>
      </motion.div>
    </motion.div>
  );
};
