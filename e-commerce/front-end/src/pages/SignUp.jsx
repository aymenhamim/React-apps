import { useState } from 'react';
const inputStyle =
  'w-full rounded-md border border-stone-300 bg-stone-50 px-3 py-2 pr-10 text-stone-600 outline-none ring-stone-300 transition-all duration-200 hover:border-stone-500 hover:bg-stone-100 focus:border-stone-500 focus:bg-stone-100 focus:ring-4 mb-2';

const nameStyle =
  'w-full rounded-md border border-stone-300 bg-stone-50 px-3 py-2  text-stone-600 outline-none ring-stone-300 transition-all duration-200 hover:border-stone-500 hover:bg-stone-100 focus:border-stone-500 focus:bg-stone-100 focus:ring-4 mb-2';

function SignUp() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');

  const [email, setEmail] = useState('aymen@gmail.com');

  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const [pwd1, setPwd1] = useState(false);
  const [pwd2, setPwd2] = useState(false);

  const handleIsVisible = num => {
    if (num == 1) {
      setPwd1(prev => !prev);
    }

    if (num == 2) {
      setPwd2(prev => !prev);
    }
  };

  return (
    <div className="flex min-h-dvh min-w-full items-center justify-center bg-slate-300">
      <div className="p w-[400px] translate-y-[-50px] rounded-2xl bg-stone-50 px-14 py-16">
        {/* This is an Icon */}
        <div className="mx-auto w-fit rounded-xl bg-stone-100 px-5 py-3 text-2xl shadow-md">
          <img src="/icons/login.svg" alt="" className="w-10" />
        </div>

        {/* This is  */}
        <div className="my-6">
          <h2 className="mx-auto w-fit text-2xl font-semibold">Sign up</h2>
          <p className="text-center text-sm font-semibold text-stone-400">
            Welcome to our store
          </p>
        </div>

        <form>
          <div className="gap flex w-full items-center justify-center gap-2">
            <input
              type="text"
              className={nameStyle + ''}
              placeholder="First Name"
            />
            <input type="text" className={nameStyle} placeholder="Last Name" />
          </div>

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
              src={`/icons/${pwd1 ? 'eye2' : 'eye'}.svg`}
              className="icon-img absolute cursor-pointer"
              onClick={() => handleIsVisible(1)}
            />
            <input
              placeholder="Password"
              type={`${pwd1 ? 'text' : 'password'}`}
              value={password}
              onChange={e => setPassword(e.target.value)}
              className={inputStyle}
            />
          </div>

          <div className="relative h-fit w-full">
            <img
              src={`/icons/${pwd2 ? 'eye2' : 'eye'}.svg`}
              className="icon-img absolute cursor-pointer"
              onClick={() => handleIsVisible(2)}
            />

            <input
              placeholder="Confirm password"
              type={`${pwd2 ? 'text' : 'password'}`}
              value={confirmPassword}
              onChange={e => setConfirmPassword(e.target.value)}
              className={inputStyle}
            />
          </div>

          <button
            type="submit"
            className="mt-4 w-full rounded-full bg-stone-900 py-2 text-center text-stone-50 transition-all duration-300 hover:bg-stone-700"
          >
            Sign up
          </button>
          <p className="mt-4 text-center text-sm text-stone-500">
            Already have an account?{' '}
            <a href="#" className="font-semibold text-stone-950">
              Sign In
            </a>
          </p>
        </form>
      </div>
    </div>
  );
}

export default SignUp;