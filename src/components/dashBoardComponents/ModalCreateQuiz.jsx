import React from "react";
import Warning from "../../icons/Warning";
import Button from "../Button";
import ButtonMain from "../ButtonMain";
import Editor from "../Editor";

function ModalCreateQuiz() {
  return (
    <div>
      <button
        className="btn bg-transparent text-white"
        onClick={() => document.getElementById("my_modal_1").showModal()}
      >
        + Create Quiz
      </button>
      <dialog id="my_modal_1" className="modal ">
        <div className="modal-box bg-[#D9D9D9] p-6  max-w-[900px] h-[90%] text-black flex flex-col gap-3">
          <div className="flex justify-between items-baseline gap-12 w-full">
            <div className="flex flex-col flex-1/2 gap-2 ">
              <h1>Name</h1>
              <input
                type="text"
                className="bg-[#CCCCCC] w-full p-2 h-10 rounded-[9px]"
              />
              <div className="w-full flex gap-2 ">
                <Warning className="w-4" />
                <h1 className="text-sm">
                  Name to indicate what this exam is about.
                </h1>
              </div>
            </div>
            <div className="flex flex-col flex-1/2 gap-2">
              <h1>Category</h1>
              <select
                defaultValue="Please Select Categoryr"
                className="select select-primary bg-[#CCCCCC] w-full p-2 h-10 rounded-[9px]"
              >
                <option disabled={true}>Please Select Category</option>
                <option>VScode</option>
                <option>VScode fork</option>
                <option>Another VScode fork</option>
              </select>
              <div className="w-full flex gap-2">
                <Warning className="w-4" />
                <h1 className="text-sm">
                  Select a category to indicate what this exam is about.
                </h1>
              </div>
            </div>
          </div>
          <div className="mt-2 flex-1 ">
            <h1>Details</h1>
            <Editor className="textarea textarea-primary w-full h-[40%] " />
            {/* <textarea
              type="text"
              placeholder="Enter Details Quiz"
              
            ></textarea> */}
          </div>
          <div>
            <h1>fuction/ variable name</h1>
            <input
              className="rounded-[9px] bg-[#CCCCCC] w-full h-8 rounded-1xl p-3"
              type="text"
              placeholder="Enter Function/ Variable name"
            />
            <div className="flex">
              <Warning className="w-4" />
              <h1 className="text-sm">Used to check correctness.</h1>
            </div>
          </div>
          <div>
            <h1>Starter Code</h1>
            <input
              className="bg-[#CCCCCC] w-full h-56 rounded-[9px]"
              type="text"
            />
            <div className="flex">
              <Warning className="w-4" />
              <h1 className="text-sm">
                Name to indicate what this exam is about.
              </h1>
            </div>
          </div>

          <div className="modal-action flex justify-center w-full">
            <form method="dialog" className="flex gap-4">
              <ButtonMain children={"Save"} />
              <ButtonMain children={"Cancel"} />
            </form>
          </div>
        </div>
      </dialog>
    </div>
  );
}

export default ModalCreateQuiz;
