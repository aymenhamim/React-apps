export const useSound = (url, { volume, playbackRate } = {}) => {
  const audio = typeof window !== 'undefined' ? new window.Audio(url) : null;
  if (audio) {
    audio.volume = volume || 1;
    audio.playbackRate = playbackRate || 1;
  }

  const play = () => {
    if (!audio) return;
    audio.currentTime = 0;
    try {
      audio.play();
    } catch (err) {
      console.log(err);
    }
  };

  return [play];
};
