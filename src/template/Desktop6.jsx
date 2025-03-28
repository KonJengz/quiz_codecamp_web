import React, { useEffect, useState } from 'react';
import SideBarMenu from '../components/quizComponents/SideBarMenu';
import ButtonRun from '../components/ButtonRun';
import Button from '../components/Button';
import Success from '../icons/Success';

export default function Desktop6() {
  const [data, setData] = useState({});
  const [selectedButton, setSelectedButton] = useState(null);

  const handleButtonClick = (buttonName) => {
    console.log('buttonName', buttonName);
    setSelectedButton(buttonName);
  };

  const fetchData = async () => {
    try {
      const response = {
        question: 'คำถาม',
        textCode: 'code',
        result: 'result',
        solution: 'solution'
      };
      setData(response);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <div className=" flex justify-center items-center">
        <SideBarMenu />
        <div className="  bg-[#261236] min-h-screen rounded-xl p-5 flex-1/2 m-2">
          {data.question}
        </div>

        <div
          className=" h-screen rounded-xl  flex-1/2 m-2
        flex justify-between items-center flex-col
        "
        >
          <div className="flex justify-start w-full  gap-2 items-center">
            <div
              className={`flex justify-center  cursor-pointer gap-2 items-start ${
                selectedButton === 'bestSolution'
                  ? 'text-[#D100D7]'
                  : 'text-white'
              }`}
              onClick={() => handleButtonClick('bestSolution')}
            >
              <div>Best Solution</div>
            </div>
            <div
              className={`flex  cursor-pointer justify-center gap-2 items-start ${
                selectedButton === 'solution' ? 'text-[#D100D7]' : 'text-white'
              }`}
              onClick={() => handleButtonClick('solution')}
            >
              <div>Solution</div>
            </div>
          </div>
          <div className=" flex-1/3 bg-[#ffffff] p-5  text-black rounded-xl w-full h-full m-2">
            {data.solution}
          </div>

          <div className="  bg-[#ffffff]  p-5 text-black rounded-xl w-full h-full m-2">
            {data.textCode}
          </div>
          <div className="  text-black w-full rounded-xl m-2 gap-2 flex justify-between items-center">
            <Button icon={<Success width="29" height="21"></Success>}>
              success!!
            </Button>

            <div className="flex gap-2">
              <ButtonRun>RUN</ButtonRun>
              <Button>SUMMIT</Button>
            </div>
          </div>
          <div className="  bg-[#ffffff] flex-1/3 p-5 text-black rounded-xl w-full h-full m-2">
            {data.result}
          </div>
        </div>
      </div>
    </>
  );
}
