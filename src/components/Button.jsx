import Rocket from "../icons/Rocket";

export default function Button({
  children,
  icon = <Rocket width={"20"} height={"20"} />,
}) {
  return (
    <button className="px-6 py-3  gap-2 rounded-[14px] text-white font-bold bg-gradient-to-bl from-blue-500 to-pink-500 flex items-center cursor-pointer">
      {icon}
      {children}
    </button>
  );
}
