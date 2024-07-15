// components/UserMessage.js
const UserMessage = ({ message }) => {
    return (
      <div className="flex justify-end mb-2">
        <div className="border-2 border-[#1f1f1f] text-white rounded px-4 py-2  max-w-xs lg:max-w-md">
          <p className="text-sm">{message}</p>
        </div>
      </div>
    );
  };
  
  export default UserMessage;
  