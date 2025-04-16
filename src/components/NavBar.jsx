import { Menu, NotebookPen, X, Rocket } from "lucide-react";
import NavItem from "./NavItem";
import { useNavigate } from "react-router";
import useAuthStore from "../stores/authStore";
import { toast } from "react-toastify";

function NavBar({ location }) {
  const actionLogout = useAuthStore((state) => state.actionLogout);
  const user = useAuthStore((state) => state.user);

  const menu = [
    {
      path: "/",
      icon: NotebookPen,
      label: "quiz",
    },
    {
      path: "/challenge",
      icon: Rocket,
      label: "challenge",
    },
    {
      label: "logout",
    },
  ];

  const navigate = useNavigate();

  const handleMenuClick = (path, label) => {
    console.log("path handleMenuClick =====", path, label);
    if (label === "logout") {
      actionLogout();
      toast.success("Logout successfully");
    } else {
      navigate(path);
    }
  };

  return (
    <div className="px-8 h-16 flex flex-col gap-3 justify-end">
      <div className="flex items-center justify-between">
        <div>{user?.username}</div>

        <div className="hidden md:flex items-center justify-center gap-8">
          {menu.map((item, index) => (
            <NavItem
              key={index}
              path={item.path}
              currentPath={location?.pathname}
              icon={item.icon}
              label={item.label}
              hdlClick={handleMenuClick}
            />
          ))}
        </div>
      </div>

      <div className="h-[1px] w-full bg-white/50"></div>
    </div>
  );
}
export default NavBar;
