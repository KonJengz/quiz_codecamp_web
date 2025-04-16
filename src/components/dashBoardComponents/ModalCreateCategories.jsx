import React from "react";
import Warning from "../../icons/Warning";

export const ModalCreateCategories = () => {
  return (
    <div>
      <button
        className="btn bg-transparent text-white"
        onClick={() => document.getElementById("my_modal_1").showModal()}
      >
        + Create Categories
      </button>
      <dialog id="my_modal_1" className="modal ">
        <div className="modal-box bg-[#D9D9D9] p-6 text-black flex flex-col gap-3 items-center">
          <div>
            <h1>Create Category</h1>
          </div>
          <div className="w-full">
            <input
              type="text"
              placeholder="Enter your Category Name"
              className="w-full rounded-[6px] p-2  bg-[#CCCCCC] justify-center"
              style={{ textAlign: "center" }}
            />
          </div>
          <div className="flex  gap-2">
            <Warning className="w-4" />
            <h1 className="text-sm">Category for quiz</h1>
          </div>
        </div>
      </dialog>
    </div>
  );
};
