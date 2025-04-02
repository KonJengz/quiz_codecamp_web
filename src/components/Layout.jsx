import React, { useState } from "react";
import { useNavigate, useLocation, useParams } from "react-router-dom";
import RocketChallenge from "../icons/RocketChallenge";
import NoteBook from "../icons/NoteBook";
import { Menu, X } from "lucide-react";
import NavItem from "./NavItem";
import NavBar from "./NavBar";

export default function Layout() {
  const navigate = useNavigate();
  // const location = useLocation();
  const { categoryId, quizId } = useParams();
  const [isOpen, setIsOpen] = useState(false);

  const hdlNavigate = (page) => {
    navigate(page);
    setIsOpen(false);
  };

  return (
    <div className="relative">
      <NavBar />

      {/* {isOpen && (
        <div className="absolute top-[50px] right-6 bg-[#261236] p-4 rounded-lg shadow-md flex flex-col gap-4 w-48">
          <NavItem
            path={`/quiz/20/22`}
            currentPath={location.pathname}
            icon={<NoteBook />}
            label="quiz"
            onClick={hdlNavigate}
          />
          <NavItem
            path={`/`}
            currentPath={location.pathname}
            icon={<RocketChallenge />}
            label="challenge"
            onClick={hdlNavigate}
          />
          <div
            className="cursor-pointer hover:text-red-400"
            onClick={() => setIsOpen(false)}
          >
            logout
          </div>
        </div>
      )} */}
    </div>
  );
}
