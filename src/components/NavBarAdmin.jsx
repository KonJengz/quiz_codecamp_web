import { useNavigate } from "react-router";
import useAuthStore from "../stores/authStore";
import { toast } from "react-toastify";
import { Menu, NotebookPen, X, Rocket, Gauge } from "lucide-react";
import NavItem from "./NavItem";

const menu = [
  {
    path: "/",
    icon: Gauge,
    label: "dashBoard",
  },
  {
    path: "/quiz",
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

function NavBarAdmin() {
  const actionLogout = useAuthStore((state) => state.actionLogout);
  const user = useAuthStore((state) => state.user);

  const navigate = useNavigate();

  const handleMenuClick = (path, label) => {
    console.log("path, label", path, label);
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

        <div className="flex items-center justify-center gap-8">
          {menu.map((item, index) => (
            <NavItem
              key={index}
              path={item.path}
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
export default NavBarAdmin;
