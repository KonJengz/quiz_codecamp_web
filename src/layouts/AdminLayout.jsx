import { Outlet } from "react-router";
import NavBarAdmin from "../components/NavBarAdmin";

function AdminLayout() {
  return (
    <>
      <NavBarAdmin />
      <Outlet />
    </>
  );
}
export default AdminLayout;
