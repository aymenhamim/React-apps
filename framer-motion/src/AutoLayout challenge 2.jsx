import { motion } from 'framer-motion';
import { useState } from 'react';
import { useMemo } from 'react';

const steps = ['start', 'larger', 'wider'];

export const App = () => {
  const [stepIndex, setStepIndex] = useState(0);
  const stepName = useMemo(() => steps[stepIndex], [stepIndex]);

  return (
    <div className="grid min-h-dvh grid-cols-1 grid-rows-1 place-items-center bg-stone-900">
      <motion.div
        layout
        onClick={() => setStepIndex(stepIndex => ++stepIndex % steps.length)}
        style={{
          width: stepName !== 'start' ? 200 : 100,
          height: stepName === 'larger' ? 200 : 100,
        }}
        className="cursor-pointer bg-white p-6"
      >
        <motion.span
          layout
          className="block h-12 w-12 rounded-full bg-black p-4"
        >
          👀
        </motion.span>
      </motion.div>
    </div>
  );
};

export default App;
