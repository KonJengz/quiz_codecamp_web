import { CreateTestCaseType } from "../../../../../types/test-cases/test-cases-type";
import { React } from "react";
import { useState } from "react";
import { useEffect } from "react";
import { Plus } from "lucide-react";
import Button from "../../../../../components/Button";
import { X } from "lucide-react";

/**
 * @typedef {{
 *  testCaseInput: CreateTestCaseType["input"]
 *  onChange: (value : string, index: number) => void
 *  onClickAdd: () => void
 *  hdlRemove: (index) => void
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
  hdlRemove,
}) {
  const inputCSSClassName =
    "max-w-[100px] bg-gray-300 border-2 border-blue-50 cursor-pointer";

  return (
    <div className="grid grid-cols-1 gap-2 w-full">
      {testCaseInput.length > 0 ? (
        <>
          <div className="flex">
            {testCaseInput.map((input, index) => (
              <Input
                hdlRemove={testCaseInput.length > 1 ? hdlRemove : null}
                key={Date.now() + index}
                cssClassName={inputCSSClassName}
                index={index}
                initialValue={input}
                onSave={onChange}
                placeholder=""
              />
            ))}
          </div>
          <Button
            className="w-full min-w-[75px] p-2 rounded-2xl  flex items-center text-gray-400 bg-gray-300 max-w-2.5 cursor-pointer"
            icon={<Plus />}
            onClick={onClickAdd}
          >
            Add Argument
          </Button>
        </>
      ) : (
        <>
          <Input
            cssClassName={inputCSSClassName}
            index={0}
            onSave={onChange}
            onClickAdd={onClickAdd}
          />
          <Button
            className="w-full min-w-[75px] p-2 rounded-2xl  flex items-center text-gray-400 bg-gray-300 max-w-2.5 cursor-pointer"
            icon={<Plus />}
            onClick={onClickAdd}
          >
            Add Argument
          </Button>
        </>
      )}
    </div>
  );
}

/**
 * @typedef {{
 *  cssClassName : string
 *  onSave: (val: string, index:number) => void
 *  initialValue: string
 *  index: number
 *  placeholder: string
 *  onClickAdd: (index: number) => void
 *  hdlRemove: () => void
 * }}
 */
var InputPropType;

/**
 *
 * @param {InputPropType} prop
 */
function Input({
  cssClassName,
  initialValue,
  onSave,
  index,
  placeholder = "First Argument:",
  hdlRemove,
}) {
  const [value, setValue] = useState("");

  useEffect(() => {
    if (!initialValue) return;

    setValue(initialValue);
  }, [initialValue]);

  return (
    <div className="flex w-full">
      <div className="flex">
        <input
          onBlur={() => onSave(value, index)}
          placeholder={placeholder}
          onChange={(e) => setValue(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              e.currentTarget.blur(); // trigger onBlur
            }
          }}
          className={cssClassName}
          value={value}
          type="text"
        />
        {hdlRemove && (
          <Button
            className="bg-gray-300 max-w-[15px] rounded-3xl cursor-pointer hover:bg-gray-400"
            onClick={() => hdlRemove(index)}
            icon={<X className="w-full h-full" />}
          />
        )}
      </div>
    </div>
  );
}
