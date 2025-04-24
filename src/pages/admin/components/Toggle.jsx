// import { useState } from "react";

function Toggle({ isToggle, hdlClicktoggle }) {
  // const [isEditing, setIsEditing] = useState(false);

  return (
    <button
      onClick={hdlClicktoggle}
      className={`w-10 h-6 rounded-full flex items-center transition-all duration-500 cursor-pointer ${
        isToggle
          ? "bg-gradient-to-bl from-pink-q to-blue-q "
          : "bg-gradient-to-bl from-gray-300 to-gray-300"
      }`}
    >
      <div
        className={`w-4 h-4 rounded-full shadow-md transform transition-all duration-500 ${
          isToggle ? "translate-x-5 bg-white" : "translate-x-1 bg-white"
        }`}
      />
    </button>
  );
}
export default Toggle;
