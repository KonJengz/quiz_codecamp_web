import { CreateTestCaseType } from "../../../../../types/test-cases/test-cases-type";
import { React } from "react";
import { useState } from "react";
import { useEffect } from "react";

/**
 * @typedef {{
 *  testCaseInput: CreateTestCaseType["input"][item]
 *  onChange: function(value : string, index: number): void
 *  onClickAdd: function(): void
 * }}
 */
var TestCaseInputItemPropType;

/**
 *
 * @param {TestCaseInputItemPropType} prop
 */
export default function TestCaseInputItem({ testCaseInput, onChange }) {
  const inputCSSClassName =
    "bg-gray-300 border-2 border-blue-50 cursor-pointer";

  return (
    <div className="grid grid-cols-1 gap-2 w-full">
      {testCaseInput.length > 0 ? (
        testCaseInput.map((input, index) => (
          <Input
            key={Date.now() + index}
            cssClassName={inputCSSClassName}
            index={index}
            initialValue={input}
            onSave={onChange}
            placeholder=""
          />
        ))
      ) : (
        <Input
          cssClassName={inputCSSClassName}
          index={0}
          initialValue={""}
          onSave={onChange}
          placeholder=""
        />
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
}) {
  const [value, setValue] = useState("");

  useEffect(() => {
    if (!initialValue) return;

    setValue(initialValue);
  }, [initialValue]);

  return (
    <div>
      <p>
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
      </p>
    </div>
  );
}
