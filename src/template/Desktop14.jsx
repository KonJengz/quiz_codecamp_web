import React, { useEffect, useState } from 'react';
import SideBarMenu from '../components/quizComponents/SideBarMenu';
import ButtonRun from '../components/ButtonRun';
import Button from '../components/Button';
import RocketChallenge from '../icons/RocketChallenge';
import NoteBook from '../icons/NoteBook';
// import Paper from '../icons/Paper';
import AddminCard from '../components/AddminCard';

export default function Desktop14() {
  return (
    <div>
      <button
        className="btn bg-transparent text-white"
        onClick={() => document.getElementById('my_modal_1').showModal()}
      >
        + Create Quiz
      </button>
      <dialog id="my_modal_1" className="modal ">
        <div className="modal-box bg-[#D9D9D9] text-black ">
          <div className="flex justify-between items-baseline gap-10">
            <div className="flex flex-col flex-1/2">
              <h1>Create Category</h1>
              <input type="text" className="bg-[#CCCCCC]" />
            </div>
            <div className="flex flex-col flex-1/2">
              <h1>Category</h1>
              <select
                defaultValue="Please Select Categoryr"
                className="select select-primary bg-[#CCCCCC]"
              >
                <option disabled={true}>Please Select Category</option>
                <option>VScode</option>
                <option>VScode fork</option>
                <option>Another VScode fork</option>
              </select>
            </div>
          </div>
          <div>
            <h1>Details</h1>
            <textarea
              type="text"
              placeholder="Enter Details Quiz"
              className="textarea textarea-primary"
            ></textarea>
          </div>

          <div className="modal-action">
            <form method="dialog">
              <button className="btn">Close</button>
            </form>
          </div>
        </div>
      </dialog>
    </div>
  );
}
