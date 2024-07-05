"use client"
import React, { useState } from 'react';
import toast from 'react-hot-toast';

import './Signup.css';
import { signIn } from 'next-auth/react';
const Signup = () => {
  const [name, setname] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');


  const handleSubmit = async (event) => {
    event.preventDefault();
    toast.loading("please wait...",{
      duration:3000
    })

    const result = await signIn('credentials', {
      redirect: false, 
      name,
      email,
      password,
    });

    if (!result.error) {
      console.log('Sign-in successful!');
      toast.success("SignIn Successful.")
      setTimeout(() => {
        window.location.href = '/';
      }, 2000); 
    } else {
      toast.error("Error.Try Again.")
      console.error('Sign-in failed:', result.error);
    }
  };


  return (
    <body>
    <div className="card w-96 p-10 text-center text-white">
      <h1 className="text-2xl text-blue-600 font-extrabold mb-4">Welcome to PayLink</h1>
      <p className="mb-6 text-white">Transfer money quickly and securely with Paylink.</p>
      <input
        type="text"
        placeholder="Name"
        className="input w-full p-3 mb-4 rounded-lg focus:outline-none"
        value={name}
        onChange={(e) => setname(e.target.value)}
      />
      <input
        type="text"
        placeholder="Email"
        className="input w-full p-3 mb-4 rounded-lg focus:outline-none"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="PASSWORD"
        className="input w-full p-3 mb-6 rounded-lg focus:outline-none"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button
        className="btn bg-gradient-to-r from-purple-600 to-blue-600 text-white w-full py-3 rounded-lg border-none font-semibold hover:from-purple-700 hover:to-blue-700"
        onClick={handleSubmit}
      >
        SIGN IN
      </button>
    
    </div>
    </body>
  );
};

export default Signup;
