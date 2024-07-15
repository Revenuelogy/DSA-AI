"use client"
import React from 'react';
import {data} from "@/data/data"
import { useRouter } from 'next/navigation';

const problemData = data.map((problem, index) => ({
  qno: index + 1,
  title: problem.title,
  solution: `/problem/${index + 1}`,
  difficulty: problem.difficulty
}));

const ProblemTable = () => {
  const router = useRouter();
  const handleTitleClick = (qno) => {
    router.push(`/problem/${qno}`);
  };
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-900 text-gray-100">
      <table className="table-auto w-full bg-gray-800 shadow-lg rounded-lg overflow-hidden">
        <thead>
          <tr className="bg-gray-700">
            
            <th className="px-4 py-2">Qno</th>
            <th className="px-4 py-2">Title</th>
            <th className="px-4 py-2">Solution</th>
            <th className="px-4 py-2">Difficulty</th>
          </tr>
        </thead>
        <tbody>
          {problemData.map((problem) => (
            <tr key={problem.qno} className="odd:bg-gray-700 even:bg-gray-600 hover:bg-gray-500 transition-colors duration-200">
              <td className="border px-4 py-2">{problem.qno}</td>
              <td className="border px-4 py-2"><button onClick={() => handleTitleClick(problem.qno)} className="text-blue-400 hover:text-blue-600">
                  {problem.title}
                </button></td>
              <td className="border px-4 py-2 text-center">
                <a href={problem.solution}  className="text-blue-400 hover:text-blue-600">
                  Solution
                </a>
              </td>
              <td className="border px-4 py-2 text-center">{problem.difficulty}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProblemTable;
