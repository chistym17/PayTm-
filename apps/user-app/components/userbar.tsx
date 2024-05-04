import { getServerSession } from "next-auth";
import { signIn, signOut, useSession } from "next-auth/react";
import { useRouter } from "next/router";
import React, { useState, useEffect } from "react";

const UserBar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const { data: session, status } = useSession();

  const handlesignin = () => {
    window.location.href = '/SignIn'

  }

  const handlesignout = () => {
    signOut()

  }

  useEffect(() => {
    if (session) {
      setIsLoggedIn(session);
    }
  }, [session, status]);

  return (
    <div className="w-full flex items-center justify-center">
      <button
        onClick={isLoggedIn ? handlesignout : handlesignin}
        className="bg-purple-500 hover:bg-blue-600 py-2 px-4 w-[200px] text-center rounded-md shadow-md transition duration-300"
      >
        {isLoggedIn ? "Logout" : "Login"}
      </button>
    </div>



  );
};

export default UserBar;
