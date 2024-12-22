function Header({ inputs, setInputs, langs, handleClick }) {
  return (
    <header className="flex gap-10 justify-center max-w-full p-3  border-b border-stone-700 ">
      <select
        className=" px-5 py-3 border border-stone-900 rounded-md bg-stone-100 h-fit outline-none max-w-[30%]"
        name="langs1"
        id="langs1"
        value={inputs.lang1}
        onChange={(e) => setInputs({ ...inputs, lang1: e.target.value })}
      >
        {langs.map((l, i) => (
          <option value={i} key={i}>
            {l}
          </option>
        ))}
      </select>

      <select
        className="w-[40%] px-5 py-3 border border-stone-900 rounded-md bg-stone-100 h-fit outline-none"
        name="langs2"
        id="langs2"
        value={inputs.lang2}
        onChange={(e) => setInputs({ ...inputs, lang2: e.target.value })}
      >
        {langs.map((l, i) => (
          <option value={l} key={i}>
            {l}
          </option>
        ))}
      </select>
      <button
        onClick={handleClick}
        className="bg-stone-900 text-stone-50 h-fit px-5 py-3 rounded-md transition-all hover:bg-stone-800"
      >
        Submit
      </button>
    </header>
  );
}

export default Header;
