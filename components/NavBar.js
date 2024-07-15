import React from 'react';

const Navbar = () => {
  return (
    <div className="bg-black text-white flex items-center justify-between p-4 sticky top-0 left-0 right-0">
      {/* Logo */}
      <div className="flex items-center">
        
        <span className="text-3xl font-bold">DSA AI</span>
      </div>
      
      {/* Profile and Settings */}
      <div className="flex items-center">
        {/* Profile Circle */}
        <div className="relative w-8 h-8 mr-4">
          <img
            className="rounded-full w-full h-full object-cover"
            src="https://via.placeholder.com/150"
            alt="Profile"
          />
        </div>
        
      </div>
    </div>
  );
};

export default Navbar;
