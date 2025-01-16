import { useNavigate } from 'react-router-dom';

function NotFound() {
  const navigate = useNavigate();
  return (
    <div className="flex min-h-dvh min-w-full items-center justify-center bg-slate-300">
      <div className="flex translate-y-[-50px] flex-col rounded-2xl bg-stone-50 px-14 py-16">
        <h2 className="mb-10 text-3xl text-red-500">Page Not Found 404 :(</h2>
        <button
          onClick={() => navigate('/login')}
          className="w-fit self-end rounded-md bg-stone-900 px-3 py-1 text-right text-stone-50"
        >
          back
        </button>
      </div>
    </div>
  );
}

export default NotFound;
