import React from 'react';
import HeaderButton from './HeaderButton';
import Image from 'next/image';
import Link from 'next/link';
import logo from "@/assets/Images/logo.png"
const HeaderItems = () => {
  return (
    <div className="flex justify-between items-center w-full h-full px-8 py-4">
      <div className="flex items-center space-x-8">
        <Image 
          src={logo} 
          alt="Company Logo" 
          width={150}
          height={100}
          style={{
            height: '100px',
            width: '150px',
          }}
        />
        
        <div className="flex space-x-5">
          <Link href="/" className="medium-text-bold text-lime-400">Home</Link>
          <Link href="/dashboard" className="medium-text-bold text-lime-400">Dashboard</Link>
          <Link href="/contactus" className="medium-text-bold text-lime-400">ContactUs</Link>
        </div>
      </div>

      <HeaderButton />
    </div>
  );
};

export default HeaderItems;
