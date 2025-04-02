import React, { useState } from "react";
import { useLocation } from "react-router";

export default function NavItem({ path, icon: Icon, label, hdlClick }) {
  const location = useLocation();
  console.log("location.pathname", location.pathname, path);
  const isActive = location.pathname === path;
  return (
    <div
      onClick={() => hdlClick(path)}
      className={`flex items-center gap-1 cursor-pointer 
        ${isActive ? "text-pink-q" : "hover:text-gray-q-1 "}`}
    >
      {Icon && (
        <Icon
          className={`w-5 h-5 ${
            isActive ? "text-pink-q" : "hover:text-gray-q-1 "
          }`}
        />
      )}
      <div>{label}</div>
    </div>
  );
}
