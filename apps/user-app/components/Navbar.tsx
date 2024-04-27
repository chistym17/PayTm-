"use client"
import { getServerSession } from 'next-auth';
import React from 'react';
import { authOptions } from '../app/lib/auth';
import { signIn, signOut } from 'next-auth/react';
import Userbar from './userbar';
import Link from 'next/link';



function Navbar() {
  return (
    <nav className="flex items-center justify-between bg-gray-800 p-4  w-full z-10 fixed top-0">
      <div className="text-white">paytm</div>
      <div className="text-white">
        <ul className="flex space-x-4">
          <li>
            <Link href='/'> <a  className="hover:text-gray-300">Home</a></Link>

          </li>

          <li>            <Link href='/transfer'> <a className="hover:text-gray-300">Transfer</a></Link>
          </li>
          <li>            <Link href='/'> <a  className="hover:text-gray-300">Profile</a></Link>
          </li>
        </ul>
      </div>
      <div>
        {/* {session?.user.email} */}
      </div>
    </nav>
  );
}

export default Navbar;