import { ArrowDownUp } from "lucide-react";
import React, { useState } from "react";

function DashBoardContainer() {
  const [data, setData] = useState([
    { username: "codecamp20.01", Quiz: 86, Challenge: 8 },
    { username: "codecamp20.02", Quiz: 88, Challenge: 5 },
    { username: "codecamp20.03", Quiz: 55, Challenge: 7 },
    { username: "codecamp20.04", Quiz: 66, Challenge: 8 },
    { username: "codecamp20.05", Quiz: 32, Challenge: 9 },
    { username: "codecamp20.06", Quiz: 8, Challenge: 6 },
    { username: "codecamp20.07", Quiz: 8, Challenge: 6 },
    { username: "codecamp20.08", Quiz: 67, Challenge: 5 },
    { username: "codecamp20.09", Quiz: 25, Challenge: 8 },
    { username: "codecamp20.10", Quiz: 76, Challenge: 8 },
    { username: "codecamp20.11", Quiz: 36, Challenge: 8 },
    { username: "codecamp20.12", Quiz: 24, Challenge: 8 },
    { username: "codecamp20.13", Quiz: 23, Challenge: 8 },
    { username: "codecamp20.14", Quiz: 12, Challenge: 8 },
    { username: "codecamp20.15", Quiz: 24, Challenge: 4 },
    { username: "codecamp20.16", Quiz: 42, Challenge: 5 },
    { username: "codecamp20.17", Quiz: 1, Challenge: 2 },
  ]);

  // const [sortConfig, setSortConfig] = useState({
  //   key: "Quiz",
  //   direction: "ascending",
  // });

  // const sortData = (key) => {
  //   let direction = "ascending";
  //   if (sortConfig.key === key && sortConfig.direction === "ascending") {
  //     direction = "descending";
  //   }
  //   setSortConfig({ key, direction });

  //   const sortedData = [...data].sort((a, b) => {
  //     if (key === "Challenge") {
  //       const challengeA = parseInt(a[key].split("/")[0]);
  //       const challengeB = parseInt(b[key].split("/")[0]);
  //       return direction === "ascending"
  //         ? challengeA - challengeB
  //         : challengeB - challengeA;
  //     }
  //     return direction === "ascending" ? a[key] - b[key] : b[key] - a[key];
  //   });

  //   setData(sortedData);
  // };

  const [clickSort, setClickSort] = useState({
    Quiz: false,
    Challenge: false,
    No: false,
  });

  const handleClickSort = (key) => {
    console.log("key", key);
    setClickSort((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));

    console.log("clickSort[key]", clickSort[key]);

    if (clickSort[key]) {
      const sortedData = [...data].sort((a, b) => {
        console.log("a[key] - b[key]", a[key] - b[key]);
        return a[key] - b[key];
      });
      setData(sortedData);
    } else {
      const sortedData = [...data].sort((a, b) => {
        return b[key] - a[key];
      });
      setData(sortedData);
    }
  };

  return (
    // <div className="bg-[#D9D9D9] flex flex-col flex-1/3 m-7 rounded-2xl">
    //   <div className="overflow-x-auto">
    //     <table className="table">
    //       <thead>
    //         <tr>
    //           <th onClick={() => sortData("No")} className="cursor-pointer">
    //             No{" "}
    //             {sortConfig.key === "No" &&
    //               (sortConfig.direction === "ascending" ? "↑" : "↓")}
    //           </th>
    //           <th>Name</th>
    //           <th onClick={() => sortData("Quiz")} className="cursor-pointer">
    //             Quiz{" "}
    //             {sortConfig.key === "Quiz" &&
    //               (sortConfig.direction === "ascending" ? "↑" : "↓")}
    //           </th>
    //           <th
    //             onClick={() => sortData("Challenge")}
    //             className="cursor-pointer"
    //           >
    //             Challenge{" "}
    //             {sortConfig.key === "Challenge" &&
    //               (sortConfig.direction === "ascending" ? "↑" : "↓")}
    //           </th>
    //         </tr>
    //       </thead>
    //       <tbody>
    //         {data.map((row, index) => (
    //           <tr key={index} className="hover:bg-base-300 ">
    //             <td>{index + 1}</td>
    //             <td>{row.username}</td>
    //             <td>{row.Quiz}</td>
    //             <td>{row.Challenge}</td>
    //           </tr>
    //         ))}
    //       </tbody>
    //     </table>
    //   </div>
    // </div>

    <div className="p-4 bg-gray-q-1 rounded-3xl">
      <table className="table">
        <thead className="">
          <tr className="flex items-center">
            <th className="flex items-center gap-1 cursor-pointer flex-1 justify-center">
              <span>No.</span>
              <ArrowDownUp
                strokeWidth={2}
                width={18}
                hanging={18}
                onClick={() => handleClickSort("No")}
              />
            </th>

            <th className="flex-15">Username</th>

            <th className="flex-4 flex items-center gap-1 cursor-pointer justify-center">
              <span>Quiz</span>
              <ArrowDownUp
                strokeWidth={2}
                width={18}
                hanging={18}
                onClick={() => handleClickSort("Quiz")}
              />
            </th>

            <th className="flex-8 flex items-center gap-1 cursor-pointer justify-center">
              <span>Challenge</span>
              <ArrowDownUp
                strokeWidth={2}
                width={18}
                hanging={18}
                onClick={() => handleClickSort("Challenge")}
              />
            </th>
          </tr>
        </thead>

        <tbody>
          {data.map((row, index) => (
            <tr key={index} className="hover:bg-base-300 flex items-center">
              <td className="flex-1 text-center">{index + 1}</td>
              <td className="flex-15">{row.username}</td>
              <td className="flex-4 text-center">{row.Quiz} / 110</td>
              <td className="flex-8 text-center">{row.Challenge} / 20</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default DashBoardContainer;
