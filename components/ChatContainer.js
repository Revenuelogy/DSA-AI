// components/ChatContainer.js
import { useState } from 'react';
import AIMessage from './AIMessage';
import UserMessage from './UserMessage';
import { BeatLoader } from 'react-spinners';
const ChatContainer = ({ messages, setMessages ,setShowChat, loader }) => {
  
  const [input, setInput] = useState('');

  const handleSend = () => {
    if (input.trim() !== '') {
      const newMessage = { id: messages.length + 1, text: input, sender: 'user' };
      setMessages([...messages, newMessage]);
      // Simulate AI response
      setTimeout(() => {
        const aiResponse = { id: messages.length + 2, text: "Sure, what's the issue?", sender: 'ai' };
        setMessages(msgs => [...msgs, aiResponse]);
      }, 1000);
      setInput('');
    }
  };

  return (
    <div className="flex flex-col h-full max-h-svh overflow-y-auto">
      <div className='mb-4'>

      <button
            className=" px-4 py-2 bg-red-500 text-white rounded self-end"
            onClick={() => setShowChat(false)}
            >
            Close
      </button>
      </div>
      <div className="flex-grow overflow-y-auto space-y-5">
        {messages.map(msg =>
          msg.sender === 'ai' ? (
            <AIMessage key={msg.id} message={msg.text} />
          ) : (
            <UserMessage key={msg.id} message={msg.text} />
          )
        )}
        {loader && (
            <AIMessage  message={<BeatLoader color="#ffffff" loading={loader}/>} />
        )}
      </div>
      <div className="p-2">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type your message here..."
          className="w-full p-2 border rounded bg-transparent border-[#1f1f1f]"
        />
        <button
          className="bg-[#000000] border-2 border-[#1f1f1f] border-dashed text-white px-4 py-2 rounded block w-full mt-2"
          onClick={handleSend}
        >
          Send
        </button>
      </div>
    </div>
  );
};

export default ChatContainer;
