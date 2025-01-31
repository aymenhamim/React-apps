import { motion } from 'framer-motion';

function Card({ title, subtitle, imageUrl }) {
  return (
    <motion.div
      className="h-full overflow-clip rounded-2xl bg-white"
      variants={{
        hidden: { x: -50 },
        visible: { x: 0 },
      }}
    >
      <div className="mb-5 p-4 text-center">
        <h2 className="text-3xl">{title}</h2>
        <p>{subtitle}</p>
      </div>
      <img className="h-full w-full object-cover" src={imageUrl} alt="" />
    </motion.div>
  );
}

export default Card;
