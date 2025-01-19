import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import Button from '../components/Button';
import Input from '../components/Input';

const SignIn: React.FC = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState('aymen@gmail.com');
  const [password, setPassword] = useState('');

  const [pwd, setPwd] = useState(false);

  const handleIsVisible = () => {
    setPwd(prev => !prev);
  };

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (email && password) {
      navigate('/');
    }
  }

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

        <form onSubmit={handleSubmit}>
          <Input
            rounded="smooth"
            placeholder="email"
            inputType="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            withIcon={'yes'}
          >
            <img src="/icons/email.svg" className="icon-img absolute" />
          </Input>

          <div></div>

          <Input
            rounded="smooth"
            placeholder="Password"
            inputType={`${pwd ? 'text' : 'password'}`}
            value={password}
            onChange={e => setPassword(e.target.value)}
            withIcon="yes"
          >
            <img
              src={`/icons/${pwd ? 'eye2' : 'eye'}.svg`}
              className="icon-img absolute cursor-pointer"
              onClick={() => handleIsVisible()}
            />
          </Input>

          <p className="text-right text-sm font-semibold">Forgot password?</p>

          <Button type="submit" size="full" rounded="pill" className="mt-4">
            Get Started
          </Button>

          <p className="mt-4 text-center text-sm text-stone-500">
            I don't have an account?{' '}
            <NavLink to={'/signup'} className="font-semibold text-stone-950">
              Sign In
            </NavLink>
          </p>
        </form>
      </div>
    </div>
  );
};

export default SignIn;
