// components/UserMessage.js
const UserMessage = ({ message }) => {
    return (
      <div className="flex justify-end mb-2 text-wrap">
        <div className="rounded-xl px-4 py-2 max-w-xs lg:max-w-md border-2 border-[#1f1f1f] text-pretty">
          <p className="text-lg text-[#fafafa] text-wrap">{message}</p>
        </div>
      </div>
    );
  };
  
  export default UserMessage;
  