import React, { useState } from 'react';

export default function NavItem({ path, currentPath, icon, label, onClick }) {
  const isActive = currentPath === path;
  return (
    <div
      onClick={() => onClick?.(path)}
      className={`flex items-center gap-2 cursor-pointer 
        ${isActive ? 'text-[#D100D7]' : 'hover:text-gray-300'}`}
    >
      {React.cloneElement(icon, { color: isActive ? '#D100D7' : 'white' })}
      <div>{label}</div>
    </div>
  );
}
