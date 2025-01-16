import { useState } from 'react';

const inputStyle =
  'w-full rounded-md border border-stone-300 bg-stone-50 px-3 py-2 pr-10 text-stone-600 outline-none ring-stone-300 transition-all duration-200 hover:border-stone-500 hover:bg-stone-100 focus:border-stone-500 focus:bg-stone-100 focus:ring-4 mb-2';

function SignIn() {
  const [email, setEmail] = useState('aymen@gmail.com');
  const [password, setPassword] = useState('');

  const [pwd, setPwd] = useState(false);

  const handleIsVisible = () => {
    setPwd(prev => !prev);
  };

  return (
    <div className="flex min-h-dvh min-w-full items-center justify-center bg-slate-300">
      <div className="p w-[400px] translate-y-[-50px] rounded-2xl bg-stone-50 px-14 py-16">
        {/* This is an Icon */}
        <div className="mx-auto w-fit rounded-xl bg-stone-100 px-5 py-3 text-2xl shadow-md">
          <img src="/icons/sign-in.svg" alt="" className="w-10" />
        </div>

        {/* This is  */}
        <div className="my-6">
          <h2 className="mx-auto w-fit text-2xl font-semibold">
            Sign in with email
          </h2>
          <p className="text-center text-sm font-semibold text-stone-400">
            Explore Our new Products with this great Website{' '}
          </p>
        </div>

        <form>
          <div className="relative h-fit w-full">
            <img src="/icons/email.svg" className="icon-img absolute" />
            <input
              placeholder="Email"
              type="text"
              value={email}
              onChange={e => setEmail(e.target.value)}
              className={inputStyle}
            />
          </div>

          <div className="relative h-fit w-full">
            <img
              src={`/icons/${pwd ? 'eye2' : 'eye'}.svg`}
              className="icon-img absolute cursor-pointer"
              onClick={() => handleIsVisible(1)}
            />
            <input
              placeholder="Password"
              type={`${pwd ? 'text' : 'password'}`}
              value={password}
              onChange={e => setPassword(e.target.value)}
              className={inputStyle}
            />
          </div>

          <p className="text-right text-sm font-semibold">Forgot password?</p>
          <button
            type="submit"
            className="mt-4 w-full rounded-full bg-stone-900 py-2 text-center text-stone-50 transition-all duration-300 hover:bg-stone-700"
          >
            Get Started
          </button>
        </form>
      </div>
    </div>
  );
}

export default SignIn;
