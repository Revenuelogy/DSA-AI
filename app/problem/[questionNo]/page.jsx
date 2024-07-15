"use client"
// pages/index.js or a specific component file
import dynamic from 'next/dynamic';
import { useState } from 'react';
import ProblemDescription from '@/components/ProblemDescription';
import ChatContainer from '@/components/ChatContainer';
const CodeEditor = dynamic(() => import('../../../components/CodeEditor'), { ssr: false });
export default function Home({params}) {
  const questionNo = params.questionNo;
  const [showChat, setShowChat] = useState(false);
  const [problem, setProblem] = useState("");
  const [code, setCode] = useState("")
  const [messages, setMessages] = useState([]);
  const [loader, setLoader] = useState(false);
  const handelExplainProblem = async() =>{
    setLoader(true);
    setShowChat(true)
    // pass only problem data
    const data = await fetch("https://qzn4gj.buildship.run/gemini",{
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({question:problem}),
    })
    const hint = await data.json()
    console.log(hint.data);
    setMessages(msgs => [...msgs, { id: msgs.length + 1, text: hint.data, sender: 'ai' }]);
    setLoader(false);
  }
  const handelGetHint = async() =>{
    setLoader(true);
    setShowChat(true)
    // pass both problem and code
    const data = await fetch("https://qzn4gj.buildship.run",{
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({question:problem, code:code}),
    })
    const hint = await data.json()
    console.log(hint.data);
    setMessages(msgs => [...msgs, { id: msgs.length + 1, text: hint.data, sender: 'ai' }]);
    setLoader(false);
  }

  return (
    <div className="flex max-h-svh h-svh ">
      <div className="w-1/2 p-4 overflow-y-auto">
        <div className='flex items-center justify-between px-4'>
          <h1 className='text-4xl font-bold '>DSA AI</h1>
          <button onClick={()=>{setShowChat(true)}} className='rounded-xl px-4 py-2 max-w-xs lg:max-w-md border-2 border-[#1f1f1f] text-pretty'>Open Chat</button>
        </div>
        <ProblemDescription questionNo={questionNo} setProblem = {setProblem}/>
        <div className='flex justify-between px-4'>
          <button
            className="mt-4 px-4 py-2 bg-blue-500 text-white rounded"
            onClick={handelExplainProblem}
          >
            Explain problem
          </button>
          <button
            className="mt-4 px-4 py-2 bg-blue-500 text-white rounded"
            onClick={handelGetHint}
          >
            Get Hint
          </button>
        </div>
        
      </div>
      <div className="w-1/2 h-full">
        <CodeEditor setCode = {setCode}/>
      </div>
      {showChat && (
        <div className="absolute top-0 right-0 w-1/3 h-screen bg-[#0a0a0a] p-4 border-l flex flex-col">
            
            <ChatContainer messages={messages} setMessages={setMessages} setShowChat={setShowChat} loader={loader}/>
        </div>
        )}
    </div>
  );
}
