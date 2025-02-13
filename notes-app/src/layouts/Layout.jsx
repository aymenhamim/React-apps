import { NavLink, Outlet } from "react-router-dom";
import SideBar from "../components/side-bar/SideBar";

function UerLayout() {
  return (
    <div>
      <SideBar />
      <NavLink to="/test">notes of a random notebook</NavLink>
      <Outlet />
    </div>
  );
}

export default UerLayout;
