import React from 'react';

const HeaderButton = () => {
  return (
    <div className="space-x-4">
      <button className="px-6 py-2 text-gray-500  medium-text-bold rounded-lg">
      Account
      </button>
      <button className="px-6 py-2 text-blue-600 medium-text-bold rounded-lg ">
        Login
      </button>
    </div>
  );
};

export default HeaderButton;
