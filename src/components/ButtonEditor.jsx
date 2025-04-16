const btnMap = {
  active: "bg-gradient-to-bl from-pink-q to-blue-q",
  cancel: "border border-pink-q",
};

function ButtonEditor({ children, btn = "active", disableBtn, handleClick }) {
  return (
    <button
      onClick={handleClick}
      disabled={disableBtn}
      className={`flex items-center hover:shadow-1 cursor-pointer gap-2 px-4 py-2 ${btnMap[btn]} rounded-2xl active:scale-115 duration-200 ease-in-out`}
    >
      {children}
    </button>
  );
}
export default ButtonEditor;
