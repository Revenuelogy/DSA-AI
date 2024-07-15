"use client"
import React, { useEffect } from 'react';
import { data } from "@/data/data"; // Assuming the JSON file is in the same directory

const ProblemDescription = ({ questionNo, setProblem }) => {
  const { title, difficulty, description, examples, constraints } = data[questionNo - 1];

  useEffect(() => {
    const examplesString = examples.map(example => {
      return `input: ${example.input}, output: ${example.output}${example.explanation ? `, explanation: ${example.explanation}` : ''}`;
    }).join('; ');

    setProblem(`question: ${description} example: ${examplesString} constraints: ${constraints}`);
  }, [description]);

  const getDifficultyClasses = (difficulty) => {
    switch (difficulty) {
      case 'Easy':
        return 'bg-[#101317] text-[#00b8a3]';
      case 'Medium':
        return 'bg-[#101317] text-[#b68b2e]';
      case 'Hard':
        return 'bg-[#101317] text-[#c44d49]';
      default:
        return 'bg-gray-200 text-gray-800'; // Default classes if difficulty is not recognized
    }
  };

  return (
    <div className="bg-[#0a0a0a] p-6 rounded-lg shadow-lg">
      <div>
        <h1 className="text-2xl font-bold">{questionNo}. {title}</h1>
      </div>
      <div className="flex space-x-2 mt-2">
        <span className={`text-sm font-semibold mr-2 px-3 py-1 rounded-full ${getDifficultyClasses(difficulty)}`}>
          {difficulty}
        </span>
      </div>
      <p className="mt-4"><code>{description}</code></p>
      {examples.map((example, index) => (
        <div key={index}>
          <h2 className="mt-4 font-semibold">Example {index + 1}:</h2>
          <pre className="bg-[#101317] text-sm p-2 rounded mt-1 text-wrap">
            Input: {example.input}<br />
            Output: {example.output}<br />
            {example.explanation && `Explanation: ${example.explanation}`}
          </pre>
        </div>
      ))}
      <h2 className="mt-4 font-semibold">Constraints:</h2>
      <ul className="list-disc ml-6 mt-1 text-sm">
        {constraints.map((constraint, index) => (
          <li key={index}>
            <code>{constraint}</code>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProblemDescription;
