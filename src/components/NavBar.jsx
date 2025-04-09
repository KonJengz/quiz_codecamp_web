import { Menu, NotebookPen, X, Rocket } from 'lucide-react';
import NavItem from './NavItem';
import { useNavigate } from 'react-router';
import useAuthStore from '../stores/authStore';

function NavBar({ isOpen, setIsOpen, location }) {
  const menu = [
    {
      path: '/',
      icon: NotebookPen,
      label: 'quiz'
    },
    {
      path: '/challenge',
      icon: Rocket,
      label: 'challenge'
    },
    {
      label: 'logout'
    }
  ];
  const { actionLogout } = useAuthStore((state) => state);
  const navigate = useNavigate();

  const hdlNavigate = (path) => {
    navigate(path);
  };

  return (
    <div className="py-2 px-4 h-16 flex flex-col gap-2 justify-end">
      <div className="flex items-center justify-between px-4">
        <div>Codecamp 20_21</div>

        <div className="hidden md:flex items-center justify-center gap-8">
          {menu.map((item, index) => {
            const hdlClick =
              item.label == 'logout' ? actionLogout : hdlNavigate;
            return (
              <NavItem
                key={index}
                path={item.path}
                currentPath={location?.pathname}
                icon={item.icon}
                label={item.label}
                hdlClick={hdlClick}
              />
            );
          })}
        </div>

        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      <div className="h-[1px] w-full bg-white"></div>
    </div>
  );
}
export default NavBar;
