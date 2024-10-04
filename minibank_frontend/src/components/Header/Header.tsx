import React from 'react';
import HeaderItems from './HeaderItems';

const Header = () => {
  return (
    <nav className=" h-32 sticky top-0 z-50 flex items-center">
      <HeaderItems />
    </nav>
  );
};

export default Header;
