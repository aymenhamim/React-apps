import { NavLink, Outlet } from "react-router-dom";
import SideBar from "../components/side-bar/SideBar";

function UerLayout() {
  return (
    <div>
      <SideBar />

      <Outlet />
    </div>
  );
}

export default UerLayout;
