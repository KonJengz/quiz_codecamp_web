import React from "react";
import ButtonEditor from "../ButtonEditor";
import { Check, X } from "lucide-react";
import WarningInfo from "../WarningInfo";

export const ModalCreateCategories = ({ text }) => {
  const handleSaveModal = async () => {
    try {
      console.log("handleSaveModal");
    } catch (error) {
      console.log("error handleSaveModal", error);
    }
  };

  const handleCloseModal = () => {
    document.getElementById("my_modal_2").close();
  };
  return (
    <>
      <h1 className="text-center w-full text-2xl">{text}</h1>

      <div className="w-full">
        <input
          type="text"
          placeholder="Enter your Category Name"
          className="w-full rounded-[6px] p-2  bg-gray-q-1 justify-center outline-0"
          style={{ textAlign: "center" }}
        />
      </div>
      <WarningInfo />

      <div className="flex gap-4 justify-center items-center w-full pt-4">
        <ButtonEditor>
          <Check strokeWidth={1.5} width={18} height={18} />
          <span>Save</span>
        </ButtonEditor>
        <ButtonEditor btn="cancel" handleClick={handleCloseModal}>
          <X strokeWidth={1.5} width={18} height={18} />
          <span>Cancel</span>
        </ButtonEditor>
      </div>
    </>
  );
};
