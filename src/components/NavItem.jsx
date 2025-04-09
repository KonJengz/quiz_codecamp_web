import { useLocation } from "react-router";

export default function NavItem({ path, icon: Icon, label, hdlClick }) {
  //http://localhost:5174/quiz/1
  const location = useLocation();
  console.log("location.pathname", location.pathname, path);
  let isActive = location.pathname.includes(label);

  if (label === "quiz" && location.pathname === "/") {
    isActive = true;
  }

  return (
    <div
      onClick={() => hdlClick(path, label)}
      className={`flex items-center gap-1 cursor-pointer 
        ${isActive ? "text-pink-q" : "hover:text-gray-q-1 "}`}
    >
      {Icon && (
        <Icon
          className={`w-5 h-5 ${
            isActive ? "text-pink-q" : "hover:text-gray-q-1 "
          }`}
        />
      )}
      <div>{label}</div>
    </div>
  );
}
