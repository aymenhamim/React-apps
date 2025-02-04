import { useState, useMemo } from 'react';
import { motion } from 'framer-motion';

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
        <motion.div layout className="h-12 w-12 rounded-full bg-black" />
      </motion.div>
    </div>
  );
};

export default App;
