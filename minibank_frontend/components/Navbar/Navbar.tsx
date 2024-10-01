"use client";
import { useState } from 'react';
import LoginModal from '../Modals/LoginModal';
import RegisterModal from '../Modals/RegisterModal';

const Navbar = () => {
  const [isLoginModalOpen, setLoginModalOpen] = useState(false);
  const [isRegisterModalOpen, setRegisterModalOpen] = useState(false);

  return (
    <nav className="flex flex-col justify-between items-center bg-white p-4 shadow-lg h-screen">
      <div className="flex items-center space-x-4 mb-auto">
        <div className="text-2xl font-bold text-gray-800">MiniBank</div>
      </div>

      <div className="flex-grow" />

      <div className="flex flex-row gap-5">
        <button
          onClick={() => setRegisterModalOpen(true)}
          className="bg-yellow-500 text-white px-4 py-2 rounded-full hover:bg-yellow-600 transition duration-300"
        >
          EmailBank
        </button>
        <button
          onClick={() => setLoginModalOpen(true)}
          className="bg-yellow-500 text-white px-4 py-2  rounded-full hover:bg-yellow-600 transition duration-300"
        >
          Login
        </button>
      </div>

      {isLoginModalOpen && (
        <div className="fixed inset-0 flex items-center justify-end bg-black bg-opacity-50 z-50">
          <div className="bg-white w-96 h-full p-8 shadow-lg transition-transform transform translate-x-0">
            <LoginModal closeModal={() => setLoginModalOpen(false)} />
          </div>
        </div>
      )}
      {isRegisterModalOpen && (
        <div className="fixed inset-0 flex items-center justify-end bg-black bg-opacity-50 z-50">
          <div className="bg-white w-96 h-full p-8 shadow-lg transition-transform transform translate-x-0">
            <RegisterModal closeModal={() => setRegisterModalOpen(false)} />
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
