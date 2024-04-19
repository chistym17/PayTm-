import React from 'react';

const Navbar = ({ }) => {
  return (
    <nav className="flex items-center justify-between bg-gray-800 p-4  w-full z-10 fixed top-0">
      <div className="text-white">website</div>
      <div className="text-white">
        <ul className="flex space-x-4">
          <li><a href="/" className="hover:text-gray-300">Home</a></li>
          <li><a href="/about" className="hover:text-gray-300">About</a></li>
          <li><a href="/profile" className="hover:text-gray-300">Profile</a></li>
        </ul>
      </div>
      <div className="text-white">Signed in as chisty</div>
    </nav>
  );
}

export default Navbar;
