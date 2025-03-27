import React from 'react';
import SideBarMenu from '../components/quizComponents/SideBarMenu';
import ButtonRun from '../components/ButtonRun';
import Button from '../components/Button';

export default function Desktop8() {
  return (
    <>
      <div className=" flex justify-center items-center">
        <SideBarMenu />
        <div className="  bg-[#261236] min-h-screen rounded-xl p-5 flex-1/2 m-2">
          โจท
        </div>
        <div
          className=" h-screen rounded-xl  flex-1/2 m-2
        flex justify-between items-end flex-col
        "
        >
          <div className="  bg-[#ffffff] p-5 text-black rounded-xl w-full h-full m-2">
            บน
          </div>
          <div className="  text-black  rounded-xl m-2 gap-2 flex justify-end items-center">
            <ButtonRun>RUN</ButtonRun>
            <Button>SUMMIT</Button>
          </div>

          <div className="  bg-[#ffffff]  p-5 text-black rounded-xl w-full h-full m-2">
            ล่าง
          </div>
        </div>
      </div>
    </>
  );
}
