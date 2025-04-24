import { Info } from "lucide-react";
import Warning from "../icons/Warning";

function WarningInfo() {
  return (
    <div className="flex gap-1 items-center text-gray-q-3">
      <Info strokeWidth={2} width={18} height={18} />
      <h1 className="text-sm">Category for quiz</h1>
    </div>
  );
}
export default WarningInfo;
