import React from "react";

export default function NoteBook({
  color = "#D9D9D9",
  width = "28",
  height = "28",
}) {
  return (
    <>
      <svg
        width={width}
        height={height}
        viewBox="0 0 28 28"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M15.6332 2.3335H6.99984C6.381 2.3335 5.78751 2.57933 5.34992 3.01691C4.91234 3.4545 4.6665 4.04799 4.6665 4.66683V23.3335C4.6665 23.9523 4.91234 24.5458 5.34992 24.9834C5.78751 25.421 6.381 25.6668 6.99984 25.6668H20.9998C21.6187 25.6668 22.2122 25.421 22.6498 24.9834C23.0873 24.5458 23.3332 23.9523 23.3332 23.3335V14.7002"
          stroke={color}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M2.3335 7H7.00016"
          stroke={color}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M2.3335 11.6665H7.00016"
          stroke={color}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M2.3335 16.3335H7.00016"
          stroke={color}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M2.3335 21H7.00016"
          stroke={color}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M24.9408 6.56351C25.4056 6.09877 25.6666 5.46843 25.6666 4.81118C25.6666 4.15393 25.4056 3.5236 24.9408 3.05885C24.4761 2.5941 23.8457 2.33301 23.1885 2.33301C22.5312 2.33301 21.9009 2.5941 21.4361 3.05885L15.5911 8.90618C15.3138 9.18341 15.1107 9.52607 15.0008 9.90251L14.0243 13.2508C13.995 13.3512 13.9933 13.4577 14.0192 13.559C14.0452 13.6603 14.0979 13.7527 14.1718 13.8267C14.2458 13.9006 14.3382 13.9533 14.4395 13.9793C14.5408 14.0052 14.6473 14.0035 14.7476 13.9742L18.096 12.9977C18.4724 12.8878 18.8151 12.6847 19.0923 12.4073L24.9408 6.56351Z"
          stroke={color}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </>
  );
}
