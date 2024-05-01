import { getServerSession } from "next-auth";
import { signIn, signOut } from "next-auth/react";
import React, { useState, useEffect } from "react";

const AppBar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    async function checkLoginStatus() {
      try {
        const sessionInfo = await getServerSession(); 
        setIsLoggedIn(sessionInfo);
      } catch (error) {
        console.error("Error fetching session info:", error);
      }
    }

    checkLoginStatus();
  }, []);

  return (
<div className="w-full flex items-center justify-center">
  <button
    onClick={isLoggedIn ? signOut : signIn}
    className="bg-purple-500 hover:bg-blue-600 py-2 px-4 w-[200px] text-center rounded-md shadow-md transition duration-300"
  >
    {isLoggedIn ? "Logout" : "Login"}
  </button>
</div>

  

  );
};

export default AppBar;
