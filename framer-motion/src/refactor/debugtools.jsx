import { PlayIcon, PauseIcon, SnailIcon, RabbitIcon } from './icons';
import { useState } from 'react';

export const Debug = ({
  activeQuoteIndex,
  speed,
  isPaused,
  setIsPaused,
  faster,
  slower,
}) => {
  return (
    <div className="mt-4 w-[400px] max-w-full rounded-2xl border bg-black p-5 text-white [font-family:'Courier_new']">
      <p className="font-bold">Debug</p>
      <p>Active quote index: {activeQuoteIndex}</p>
      <p>Speed: {speed}ms</p>
      <div className="mt-3 flex flex-wrap gap-2">
        <button
          onClick={() => setIsPaused(paused => !paused)}
          className="rounded-full bg-white p-3 text-black"
        >
          {isPaused ? <PlayIcon /> : <PauseIcon />}
        </button>
        <button
          onClick={slower}
          className="flex gap-2 rounded-full bg-white p-3 text-black"
        >
          Slowerrr.. <SnailIcon />
        </button>
        <button
          onClick={faster}
          className="flex gap-2 rounded-full bg-white p-3 text-black"
        >
          FASTER <RabbitIcon />
        </button>
      </div>
    </div>
  );
};

export const useSpeedControl = () => {
  const [speed, setSpeed] = useState(4000);

  const faster = () => {
    setSpeed(currentSpeed => {
      const delta = currentSpeed > 1000 ? 1000 : 100;
      const newSpeed = currentSpeed - delta;

      return Math.max(100, newSpeed);
    });
  };

  const slower = () => {
    setSpeed(currentSpeed => {
      const delta = currentSpeed > 1000 ? 1000 : 100;
      const newSpeed = currentSpeed + delta;

      return Math.min(10000, newSpeed);
    });
  };

  return { speed, setSpeed, faster, slower };
};
