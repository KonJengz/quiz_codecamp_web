import React from 'react';
import { useNavigate, useLocation, useParams } from 'react-router-dom';
import RocketChallenge from '../icons/RocketChallenge';
import NoteBook from '../icons/NoteBook';

export default function Layout() {
  const navigate = useNavigate();
  const location = useLocation();
  const { categoryId, quizId } = useParams();

  const hdlNavigate = (page) => {
    navigate(page);
    console.log(`${page}`);
  };

  return (
    <div>
      <div className="flex items-center justify-between p-2 px-6 -mb-6">
        <div>codecamp 20_21</div>
        <div className="flex items-center justify-center gap-8">
          <div
            onClick={() => hdlNavigate(`/quiz/20/22`)}
            className={`flex items-center justify-center cursor-pointer 
              ${
                location.pathname === `/quiz/${categoryId}/${quizId}`
                  ? 'text-[#D100D7]'
                  : 'hover:text-gray-300'
              }`}
          >
            {location.pathname === '/quiz/20/22' ? (
              <NoteBook color="#D100D7" />
            ) : (
              <NoteBook />
            )}
            <div>quiz</div>
          </div>

          <div
            onClick={() => hdlNavigate('/')}
            className={`flex items-center justify-center cursor-pointer 
              ${
                location.pathname === '/'
                  ? 'text-[#D100D7]'
                  : 'hover:text-gray-300'
              }`}
          >
            {location.pathname === '/' ? (
              <RocketChallenge color="#D100D7" />
            ) : (
              <RocketChallenge />
            )}
            <div>challenge</div>
          </div>

          <div className="cursor-pointer hover:text-red-400">logout</div>
        </div>
      </div>
      <div className="m-4 p-2">
        <div className="h-[1px] w-full bg-white"></div>
      </div>
    </div>
  );
}
