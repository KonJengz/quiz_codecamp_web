import { Menu, NotebookPen, X, Rocket } from 'lucide-react';
import NavItem from './NavItem';
import { useNavigate } from 'react-router';
import useAuthStore from '../stores/authStore';
import { toast } from 'react-toastify';

function NavBar({ isOpen, setIsOpen, location }) {
  const actionLogout = useAuthStore((state) => state.actionLogout);

  //http://localhost:5174/quiz/1

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

  const navigate = useNavigate();

  // const hdlNavigate = (path) => {
  //   navigate(path);
  // };

  // const hdlLogout = () => {
  //   // handle logout logic here
  //   console.log("Logout clicked");
  // }
  const handleMenuClick = (path, label) => {
    console.log('path handleMenuClick =====', path, label);
    if (label === 'logout') {
      actionLogout();
      toast.success('Logout successfully');
    } else {
      navigate(path);
    }
  };

  return (
    <div className="py-2 px-4 h-16 flex flex-col gap-2 justify-end">
      <div className="flex items-center justify-between px-4">
        <div>Codecamp 20_21</div>

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

        {/* <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div> */}
      </div>

      <div className="h-[1px] w-full bg-white"></div>
    </div>
  );
}
export default NavBar;
