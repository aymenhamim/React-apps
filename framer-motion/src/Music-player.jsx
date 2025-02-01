import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

import { DetailView } from './even-more-shared-animation/DetailView';
import { SongPreview } from './even-more-shared-animation/SongPreview';
import { songs } from './even-more-shared-animation/songs';

const App = () => {
  const [selectedSong, setSelectedSong] = useState(null);

  return (
    <div className="min-h-dvh bg-stone-900">
      <div className="relative mx-auto aspect-[9/16] w-full max-w-[400px] overflow-clip rounded-3xl border border-white/10 bg-white/10 p-2 text-white sm:p-4">
        <div className="mb-6 flex aspect-video flex-col items-start rounded-2xl bg-white/10 p-4 text-2xl font-bold md:p-8">
          <p>Trending music</p>
          <a className="text-md mt-auto rounded-full bg-white/10 p-2 font-normal">
            Explore now ▸
          </a>
        </div>
        <p className="mb-3 text-xl font-bold">Your favorites</p>
        <div className="grid grid-cols-1 gap-4">
          {songs.map(song => (
            <SongPreview
              key={song.id}
              song={song}
              setSelectedSong={setSelectedSong}
            />
          ))}
        </div>
        {selectedSong && (
          <DetailView
            onClose={() => setSelectedSong(null)}
            song={selectedSong}
          />
        )}
      </div>
    </div>
  );
};

export default App;
