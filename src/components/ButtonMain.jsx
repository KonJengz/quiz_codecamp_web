const btnMap = {
  active: "bg-gradient-to-bl from-pink-q to-blue-q",
  cancel: "bg-purple-1",
};

function ButtonMain({ children, disableBtn, btn = "active", type = "submit" }) {
  return (
    <div
      className={`rounded-2xl w-fit bg-conic/[from_var(--border-angle)] from-pink-q via-blue-q to-pink-q from-40% via-70% to-100% ${
        disableBtn && "animate-rotate-border"
      } p-px`}
    >
      <button
        type={type}
        className={`flex items-center hover:shadow-1 cursor-pointer gap-2 px-4 py-2 ${btnMap[btn]} rounded-2xl active:scale-115 duration-200 ease-in-out`}
      >
        {children}
      </button>
    </div>
  );
}
export default ButtonMain;
