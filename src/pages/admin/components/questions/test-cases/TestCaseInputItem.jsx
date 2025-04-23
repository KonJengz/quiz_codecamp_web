import { Plus } from "lucide-react";
import Button from "../../../../../components/Button";
import { CreateTestCaseType } from "../../../../../types/test-cases/test-cases-type";
import { React } from "react";

/**
 * @typedef {{
 *  testCaseInput: CreateTestCaseType["input"][item]
 *  onChange: function(event : Event, index: number): void
 *  onClickAdd: function(): void
 * }}
 */
var TestCaseInputItemPropType;

/**
 *
 * @param {TestCaseInputItemPropType} prop
 */
export default function TestCaseInputItem({
  testCaseInput,
  onChange,
  onClickAdd,
}) {
  return (
    <div className="grid grid-cols-1 gap-2 w-full">
      {testCaseInput.length > 0 ? (
        testCaseInput.map((input, index) => (
          <div>
            <p>
              Argument {index + 1}: {input}
            </p>
            <input
              onChange={(e) => onChange(e, index)}
              key={Date.now() + index}
              value={input}
            />
          </div>
        ))
      ) : (
        <div>
          <p>
            <input
              onChange={onChange}
              placeholder="First Argument :"
              className="bg-gray-300 border-2 border-blue-50 cursor-pointer"
              type="text"
            />
          </p>
        </div>
      )}
      <Button
        className="w-full min-w-[75px] p-2 rounded-2xl  flex items-center rounded text-gray-400 bg-gray-300 max-w-2.5 cursor-pointer"
        icon={<Plus />}
        onClick={onClickAdd}
      >
        Add Argument
      </Button>
    </div>
  );
}
