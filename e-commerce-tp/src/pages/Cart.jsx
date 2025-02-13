import { AnimatePresence, motion } from 'framer-motion';
import IconButton from '../components/IconButton';

function Cart() {
  return (
    <AnimatePresence>
      <motion.div
        variants={{
          visible: { opacity: 1, y: 0 },
          hidden: { opacity: 0, y: -40 },
        }}
        initial="hidden"
        animate="visible"
        exit="hidden"
        className="relative flex w-full justify-between gap-3 rounded-xl bg-stone-50 px-6 py-6 shadow-sm max-md:flex-col"
      >
        <div className="w-2/3 rounded-lg border border-stone-800 px-5 py-3 max-xl:w-1/2 max-md:w-full"></div>

        <div className="w-1/3 rounded-lg border border-stone-800 px-5 py-3 max-xl:w-1/2 max-md:w-full">
          <h3 className="text-center text-xl font-semibold">Shoping Cart</h3>
          <div class="mx-5 my-4 border-t border-stone-700"></div>

          <div className="flex flex-col gap-1">
            <div>
              <div className="my-2 flex items-center gap-5">
                <div className="h-20 w-20 rounded-md bg-slate-600 max-md:h-14 max-md:w-14" />

                <div className="mb-2 flex justify-between gap-0.5 max-md:flex-col">
                  <div>
                    <h4 className="text-lg font-semibold">[PRODUCT_TITLE]</h4>
                    <p className="mb-3 text-sm">price: [price]</p>
                  </div>
                  <div className="flex gap-2">
                    <IconButton icon="add" size="sm" />
                    <p>1</p>
                    <IconButton icon="add" size="sm" />
                  </div>
                </div>
              </div>
              <div class="mx-12 my-0 border-t border-stone-400"></div>
            </div>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}

export default Cart;
