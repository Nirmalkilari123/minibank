import React, { useState } from 'react';

interface LoginModalProps {
  closeModal: () => void;
}

const LoginModal: React.FC<LoginModalProps> = ({ closeModal }) => {
  const [phone, setPhone] = useState('');

  return (
    <div className="relative h-full">
      {/* Close Button */}
      <button
        className="absolute top-4 right-4 text-gray-500 hover:text-black"
        onClick={closeModal}
      >
        ✕
      </button>

      {/* Login Form */}
      <h2 className="text-2xl font-bold text-gray-800 mb-4">Login to your Account</h2>

      <label className="block text-sm text-gray-700 mb-2">Enter Your Phone No.</label>
      <input
        type="text"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
        className="w-full border rounded-md px-4 py-2 mb-4 focus:outline-none focus:ring-2 focus:ring-yellow-500"
        placeholder="Enter your phone number"
      />

      <button className="w-full bg-yellow-500 text-white py-2 rounded-md hover:bg-yellow-600 transition">
        Generate OTP
      </button>
    </div>
  );
};

export default LoginModal;
