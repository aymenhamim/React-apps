import Navbar from '../components/Navbar';
import { Outlet, useLocation } from 'react-router-dom';
import Footer from '../components/Footer';

const UserLayout = () => {
  const location = useLocation();
  const isProduct = location.pathname === '/products';

  return (
    <div className="min-h-dvh min-w-full bg-slate-100 pt-4">
      <Navbar />
      <div className="mx-auto mt-4 flex w-[90dvw]">
        <Outlet />
      </div>
      {isProduct && <Footer />}
    </div>
  );
};

export default UserLayout;
