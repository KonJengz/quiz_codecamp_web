import React from 'react';
import Rocket from '../icons/Rocket';
import NoteBook from '../icons/NoteBook';

export default function Layout() {
  return (
    <>
      <div className="m-5">
        <div className="flex items-center justify-between p-2">
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

        <div className="h-[1px] w-full  bg-white "></div>
      </div>
    </>
  );
}
