import React, { useState } from 'react';

export default function AddminCard({ name = 'text', total = 0 }) {
  const [isEditing, setIsEditing] = useState(false);

  return (
    <div className=" w-full card w-60 bg-base-200 shadow-xl border-2 border-transparent hover:border-purple-500 hover:shadow-purple-500 transition duration-300 rounded-2xl p-4">
      <div className="text-center">
        <span className="text-lg font-semibold  text-black">
          {name} <span className="text-gray-500">{`(${total})`}</span>
        </span>
      </div>
      <div className="flex justify-center items-center gap-2 mt-3">
        <span className="text-gray-500 flex items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M11 19H4a1 1 0 01-1-1v-3.586a1 1 0 01.293-.707l12-12a1 1 0 011.414 0l3.586 3.586a1 1 0 010 1.414l-12 12a1 1 0 01-.707.293z"
            />
          </svg>
          Edit
        </span>
        <input
          type="checkbox"
          className="toggle toggle-md toggle-primary"
          checked={isEditing}
          onChange={() => setIsEditing(!isEditing)}
        />
      </div>
    </div>
  );
}
