import { DotLottieReact } from "@lottiefiles/dotlottie-react";

function CheckBox({ isChecked, setIsChecked }) {
  return (
    <div>
      {!isChecked ? (
        <div
          onClick={() => setIsChecked(!isChecked)}
          className="relative w-10 h-10 bg-gray-q-1 rounded-xl cursor-pointer"
        ></div>
      ) : (
        <DotLottieReact
          className="w-10 h-10 scale-125"
          loop={false}
          speed={1}
          autoplay={true}
          src="https://lottie.host/0ecbfdc2-4555-4389-b968-2826deaad531/Ya7gZsCCmG.lottie"
        />
      )}
    </div>
  );
}
export default CheckBox;
