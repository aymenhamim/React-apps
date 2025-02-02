const itemStyle = 'text-sm text-stone-300';

const Footer = () => {
  return (
    <footer className="mx-auto mt-10 flex w-full justify-center border-t border-stone-600 bg-stone-950 px-10 py-5 text-stone-50">
      {/* <div></div> */}
      <div className="flex w-[75%] justify-evenly">
        <div>
          <h4 className="mb-3 font-bold">PRODUCT</h4>
          <p className={itemStyle}>Mouse</p>
          <p className={itemStyle}>Keyboard</p>
          <p className={itemStyle}>Headset</p>
          <p className={itemStyle}>Webcam</p>
        </div>

        <div>
          <h4 className="mb-3 font-bold">SOCIAL</h4>
          <p className={itemStyle}>Facebook</p>
          <p className={itemStyle}>Instagram</p>
          <p className={itemStyle}>Twitter</p>
          <p className={itemStyle}></p>
        </div>

        <div>
          <h4 className="mb-3 font-bold">COMPANY</h4>
          <p className={itemStyle}>About</p>
          <p className={itemStyle}>Contact</p>
          <p className={itemStyle}>Products</p>
        </div>

        <div>
          <h4 className="mb-3 font-bold">Contact</h4>
          <p className={itemStyle}>+212 6 10 00 10 00</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
