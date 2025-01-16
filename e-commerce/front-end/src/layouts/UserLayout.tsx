import React from 'react';
import Navbar from '../components/Navbar';
import { Outlet } from 'react-router-dom';

const UserLayout: React.FC = () => {
  return (
    <div className="min-h-dvh min-w-full bg-slate-100 pt-4">
      <Navbar />
      <div className="mx-auto mt-4 flex w-[90dvw]">
        <Outlet />
      </div>
    </div>
  );
};

export default UserLayout;
