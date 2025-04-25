import { MoveDown, MoveUp } from "lucide-react";
import React, { useEffect, useState } from "react";
import useUserStore from "../../stores/userStore";
import useCategoriesStore from "../../stores/categoriesStore";

// const users = [
//   { username: "codecamp20.01", Quiz: 86, Challenge: 8 },
//   { username: "codecamp20.02", Quiz: 88, Challenge: 5 },
//   { username: "codecamp20.03", Quiz: 55, Challenge: 7 },
//   { username: "codecamp20.04", Quiz: 66, Challenge: 8 },
//   { username: "codecamp20.05", Quiz: 32, Challenge: 9 },
//   { username: "codecamp20.06", Quiz: 8, Challenge: 6 },
//   { username: "codecamp20.07", Quiz: 8, Challenge: 6 },
//   { username: "codecamp20.08", Quiz: 67, Challenge: 5 },
//   { username: "codecamp20.09", Quiz: 25, Challenge: 8 },
//   { username: "codecamp20.10", Quiz: 76, Challenge: 8 },
//   { username: "codecamp20.11", Quiz: 36, Challenge: 8 },
//   { username: "codecamp20.12", Quiz: 24, Challenge: 8 },
//   { username: "codecamp20.13", Quiz: 23, Challenge: 8 },
//   { username: "codecamp20.14", Quiz: 12, Challenge: 8 },
//   { username: "codecamp20.15", Quiz: 24, Challenge: 4 },
//   { username: "codecamp20.16", Quiz: 42, Challenge: 5 },
//   { username: "codecamp20.17", Quiz: 1, Challenge: 2 },
// ]

function DashBoardContainer() {
  const [data, setData] = useState([]);

  const actionGetUsers = useUserStore((state) => state.actionGetUsers);
  const actionGetCategoriesFilter = useCategoriesStore(
    (state) => state.actionGetCategoriesFilter
  );
  const quizzes = useCategoriesStore((state) => state.quizzes);
  const challenges = useCategoriesStore((state) => state.challenges);

  const [clickSort, setClickSort] = useState({
    Quiz: false,
    Challenge: false,
    username: false,
  });

  const handleClickSort = (key) => {
    setClickSort((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));

    if (key === "username") {
      const sortedData = [...data].sort((a, b) => {
        if (clickSort[key]) {
          return a[key].localeCompare(b[key]);
        } else {
          return b[key].localeCompare(a[key]);
        }
      });
      return setData(sortedData);
    }

    if (clickSort[key]) {
      const sortedData = [...data].sort((a, b) => {
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

  useEffect(() => {
    const fetchData = async () => {
      try {
        const users = await actionGetUsers();
        const students = users.filter((user) => user.role === "STUDENT");
        const sortedStudents = students.sort((a, b) =>
          a.username.localeCompare(b.username)
        );
        setData(sortedStudents);
      } catch (err) {
        console.error("Failed to fetch users:", err);
      }
    };

    fetchData();
    actionGetCategoriesFilter();
  }, []);

  return (
    <div className="p-4 bg-gray-q-1 rounded-3xl">
      <table className="table">
        <thead className="">
          <tr className="flex items-center">
            <th className="flex items-center gap-1 cursor-pointer flex-1 justify-center">
              <span>No.</span>
              {!clickSort.username ? (
                <MoveUp
                  strokeWidth={2}
                  width={18}
                  hanging={18}
                  onClick={() => handleClickSort("username")}
                />
              ) : (
                <MoveDown
                  strokeWidth={2}
                  width={18}
                  hanging={18}
                  onClick={() => handleClickSort("username")}
                />
              )}
            </th>

            <th className="flex-15">Username</th>

            <th className="flex-4 flex items-center gap-1 cursor-pointer justify-center">
              <span>Quiz</span>
              {!clickSort.Quiz ? (
                <MoveUp
                  strokeWidth={2}
                  width={18}
                  hanging={18}
                  onClick={() => handleClickSort("Quiz")}
                />
              ) : (
                <MoveDown
                  strokeWidth={2}
                  width={18}
                  hanging={18}
                  onClick={() => handleClickSort("Quiz")}
                />
              )}
            </th>

            <th className="flex-8 flex items-center gap-1 cursor-pointer justify-center">
              <span>Challenge</span>
              {!clickSort.Challenge ? (
                <MoveUp
                  strokeWidth={2}
                  width={18}
                  hanging={18}
                  onClick={() => handleClickSort("Challenge")}
                />
              ) : (
                <MoveDown
                  strokeWidth={2}
                  width={18}
                  hanging={18}
                  onClick={() => handleClickSort("Challenge")}
                />
              )}
            </th>
          </tr>
        </thead>

        <tbody className="text-purple-1">
          {data.map((row, index) => (
            <tr key={index} className="hover:bg-base-300 flex items-center">
              <td className="flex-1 text-center">{index + 1}</td>
              <td className="flex-15">{row.username}</td>
              <td className="flex-4 text-center">
                {row.totalSolvedQuizzes} / {quizzes.length}
              </td>
              <td className="flex-8 text-center">
                {row.totalSolvedChallenges} / {challenges.length}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default DashBoardContainer;
