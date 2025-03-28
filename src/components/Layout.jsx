import React from 'react';
import Rocket from '../icons/Rocket';
import NoteBook from '../icons/NoteBook';

export default function Layout() {
  return (
    <>
      <div>
        <div className="flex items-center justify-between p-2 px-6 -mb-6">
          <div>codecamp 20_21</div>
          <div className="flex items-center justify-center gap-8">
            <div className=" flex items-center justify-center">
              <NoteBook></NoteBook>
              <div>quiz</div>
            </div>

            <div className=" flex items-center justify-center">
              <Rocket></Rocket>
              <div>challenge</div>
            </div>

            <div>logout</div>
          </div>
        </div>
        <div className="m-4 p-2">
          <div className=" h-[1px] w-full  bg-white "></div>
        </div>
      </div>
    </>
  );
}
