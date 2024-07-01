//@ts-nocheck

import {  signOut, useSession } from "next-auth/react";
import  { useState, useEffect } from "react";
import toast from "react-hot-toast";

const UserBar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const { data: session, status } = useSession();

  const handlesignin = () => {
    toast('Redirecting to SignIn page...')
    window.location.href = '/SignIn'

  }

  const handlesignout = () => {
    signOut()
    toast.success('SignOut successful')

  }

  const handleDashboardClick = () => {

  }

  useEffect(() => {
    if (session) {
      setIsLoggedIn(session);
    }
  }, [session, status]);

  return (
    <div className="w-full flex items-center justify-center space-x-4">
    <button
      onClick={isLoggedIn ? handlesignout : handlesignin}
      className="bg-purple-500 hover:bg-blue-600 py-2 px-4 w-[200px] text-center rounded-md shadow-md transition duration-300"
    >
      {isLoggedIn ? "Logout" : "Login"}
    </button>
    {isLoggedIn && (
      <button
        onClick={handleDashboardClick}
        className="bg-blue-500 hover:bg-blue-600 py-2 px-4 w-[200px] text-center rounded-md shadow-md transition duration-300"
      >
        profile
      </button>
    )}
  </div>



  );
};

export default UserBar;
