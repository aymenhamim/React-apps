import { NavLink, Outlet } from "react-router-dom";

function UerLayout() {
  return (
    <div>
      <NavLink to="/test">notes of a random notebook</NavLink>
      <Outlet />
    </div>
  );
}

export default UerLayout;
