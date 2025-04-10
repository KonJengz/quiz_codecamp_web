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
    <>
      <NavBar />
    </>
  );
}
