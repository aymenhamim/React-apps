import { motion } from "framer-motion";
import { XIcon } from "lucide-react";

function Modal({ children, isOpen, onClose }) {
  return (
    <>
      {isOpen && (
        <div
          className="overlay fixed left-0 top-0 w-full h-dvh backdrop-blur-[3px] backdrop-brightness-75 z-50"
          onClick={onClose}
        >
          <motion.div
            onClick={(e) => e.stopPropagation()}
            initial={{ opacity: 0, scale: 0.6 }}
            exit={{ opacity: 0, scale: 0.6 }}
            animate={{ opacity: 1, scale: 1 }}
            className="modal fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-stone-50 rounded-xl shadow-lg  py-14 px-16"
          >
            <button
              className="bg-none border-0 p-1.5 rounded-sm transform translate-x-[0.8rem] absolute top-[1.2rem] right-[1.9rem] cursor-pointer"
              onClick={onClose}
            >
              <XIcon />
            </button>

            <div>{children}</div>
          </motion.div>
        </div>
      )}
    </>
  );
}

export default Modal;
