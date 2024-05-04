"use server"
import { signOut } from "next-auth/react";

const logout = async () => {
  return await signOut()
 
  
};

export default logout;