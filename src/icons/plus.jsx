import React from 'react';

export default function plus({ width = '20', height = '20' }) {
  return (
    <div>
      <svg
        width={width}
        height={height}
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M4.16699 10H15.8337"
          stroke="#D9D9D9"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M10 4.16699V15.8337"
          stroke="#D9D9D9"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    </div>
  );
}
