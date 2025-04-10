import React, { useEffect, useState } from 'react';
import SideBarMenu from '../components/quizComponents/SideBarMenu';
import ButtonRun from '../components/ButtonRun';
import Button from '../components/Button';
import RocketChallenge from '../icons/RocketChallenge';
import NoteBook from '../icons/NoteBook';
// import Paper from '../icons/Paper';
import AddminCard from '../components/AddminCard';

export default function Desktop12() {
  const [data, setData] = useState([]);

  const fetchData = async () => {
    try {
      const response = [
        {
          name: 'Variable',
          isSuccess: true,
          finish: 78,
          total: 120
        },
        {
          name: 'basic object',
          isSuccess: false,
          finish: 38,
          total: 1200
        },
        {
          name: 'Loop',
          isSuccess: false,
          finish: 798,
          total: 1290
        },
        {
          name: 'basic array',
          isSuccess: true,
          finish: 20,
          total: 120
        },
        {
          name: 'basic array2',
          isSuccess: false,
          finish: 8,
          total: 180
        }
      ];
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
      <div className=" flex justify-between items-center p-4">
        <div className=" flex gap-4 ">
          <Button icon={<RocketChallenge />}>Category</Button>
          <ButtonRun icon={<NoteBook />}>Quiz</ButtonRun>
          <ButtonRun icon={<RocketChallenge />}>Learn</ButtonRun>
        </div>
        <div>
          <ButtonRun icon={<RocketChallenge />}>Create Category</ButtonRun>
        </div>
      </div>
      <div>
        <div className=" grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 p-4">
          {data.map((item, index) => (
            <>
              <AddminCard name={item.name} total={item.total} />
            </>
          ))}
        </div>
      </div>
    </>
  );
}
