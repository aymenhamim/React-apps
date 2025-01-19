import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="mx-auto mt-10 flex w-full justify-center border-t border-stone-600 bg-stone-950 px-10 py-5 text-stone-50">
      {/* <div></div> */}
      <div className="flex w-[75%] justify-evenly">
        <div>
          <h4 className="mb-3 font-bold">PRODUCT</h4>
          <p className="text-sm text-stone-300">Mouse</p>
          <p className="text-sm text-stone-300">Keyboard</p>
          <p className="text-sm text-stone-300">Headset</p>
          <p className="text-sm text-stone-300">Webcam</p>
        </div>

        <div>
          <h4 className="mb-3 font-bold">SOCIAL</h4>
          <p className="text-sm text-stone-300">Facebook</p>
          <p className="text-sm text-stone-300">Instagram</p>
          <p className="text-sm text-stone-300">Twitter</p>
          <p className="text-sm text-stone-300"></p>
        </div>

        <div>
          <h4 className="mb-3 font-bold">COMPANY</h4>
          <p className="text-sm text-stone-300">About</p>
          <p className="text-sm text-stone-300">Contact</p>
          <p className="text-sm text-stone-300">Products</p>
        </div>

        <div>
          <h4 className="mb-3 font-bold">Contact</h4>
          <p className="text-sm text-stone-300">+212 6 10 00 10 00</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
