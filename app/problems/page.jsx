"use client";
import React from 'react';
import { data } from "@/data/data";
import { useRouter } from 'next/navigation';
import Navbar from '@/components/NavBar';

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

  const getDifficultyColor = (difficulty) => {
    switch (difficulty) {
      case 'Easy':
        return '#00b8a3';
      case 'Medium':
        return '#ffc01e';
      case 'Hard':
        return '#ff375f';
      default:
        return '#fff'; // Default color if difficulty is not recognized
    }
  };

  return (
    <div className='flex flex-col'>
      <Navbar />
      <div className="flex justify-center items-center min-h-screen bg-black text-gray-100">
        <table className="table-auto w-4/5 bg-gray-800 shadow-lg rounded-lg overflow-hidden border-2 border-[#1f1f1f]">
          <thead>
            <tr className="bg-[#0a0a0a]">
              <th className="px-4 py-2">Qno</th>
              <th className="px-4 py-2">Title</th>
              <th className="px-4 py-2">Solution</th>
              <th className="px-4 py-2">Difficulty</th>
            </tr>
          </thead>
          <tbody>
            {problemData.map((problem) => (
              <tr key={problem.qno} className="bg-[#0a0a0a] transition-colors duration-200">
                <td className="border-2 border-[#1f1f1f] px-4 py-2">{problem.qno}</td>
                <td className="border-2 border-[#1f1f1f] px-4 py-2">
                  <button onClick={() => handleTitleClick(problem.qno)} className="text-white hover:text-blue-600">
                    {problem.title}
                  </button>
                </td>
                <td className="border-2 border-[#1f1f1f] px-4 py-2 text-center">
                  <a href={problem.solution} className="text-white">
                    Solution
                  </a>
                </td>
                <td className="border-2 border-[#1f1f1f] px-4 py-2 text-center" style={{ color: getDifficultyColor(problem.difficulty) }}>
                  {problem.difficulty}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ProblemTable;
