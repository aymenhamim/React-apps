import { Outlet } from "react-router-dom";

function UserLayout() {
  return (
    <div>
      <h2 className="text-3xl font-bold">User Page</h2>
      <p>Welcome to the user section of our application!</p>
      <p>Here you can manage your profile, settings, and more.</p>
      <Outlet />
    </div>
  );
}

export default UserLayout;
