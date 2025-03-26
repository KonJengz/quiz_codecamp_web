import React from 'react';
import Rocket from '../icons/Rocket';

export default function Button({ children }) {
  return (
    <button className="px-6 py-2 rounded-[12px] text-white font-bold bg-gradient-to-r from-blue-500 to-pink-500 flex items-center gap-2">
      <Rocket />
      {children}
    </button>
  );
}
