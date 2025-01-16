import { useState } from 'react';

const inputStyle =
  'w-full rounded-md border border-stone-300 bg-stone-50 px-3 py-2 pl-10 text-stone-600 outline-none ring-stone-300 transition-all duration-200 hover:border-stone-500 hover:bg-stone-100 focus:border-stone-500 focus:bg-stone-100 focus:ring-4 mb-2';

function SignIn() {
  const [email, setEmail] = useState('aymen@gmail.com');
  const [password, setPassword] = useState('');

  return (
    <div className="flex min-h-dvh min-w-full items-center justify-center bg-slate-300">
      <div className="p w-[400px] translate-y-[-50px] rounded-2xl bg-stone-50 px-14 py-16">
        {/* This is an Icon */}
        <div className="mx-auto w-fit rounded-xl bg-stone-100 px-5 py-3 text-2xl shadow-md">
          X
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
          <input
            placeholder="Email"
            type="text"
            value={email}
            onChange={e => setEmail(e.target.value)}
            className={inputStyle}
          />

          <input
            placeholder="Password"
            type="password"
            value={password}
            onChange={e => setPassword(e.target.value)}
            className={inputStyle}
          />
          <p className="text-right text-sm font-semibold">Forgot password?</p>
          <button
            type="submit"
            className="mt-4 w-full rounded-xl bg-stone-900 py-2 text-center text-stone-50 transition-all duration-300 hover:bg-stone-700"
          >
            Get Started
          </button>
        </form>
      </div>
    </div>
  );
}

export default SignIn;
