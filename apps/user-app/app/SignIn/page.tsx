"use client"
import React, { useState } from 'react';
import { signIn } from 'next-auth/react';
import toast from 'react-hot-toast';

export default function SignIn  ()  {
  const [name, setName] = useState('');
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
    <div className="flex justify-center items-center h-screen">
      <div className="w-96 bg-white p-8 rounded-xl border border-black">
        <h2 className="text-2xl font-semibold mb-4 text-center">Sign In</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="name" className="block text-black text-sm font-medium">Name</label>
            <input type="text" id="name" className="form-input rounded-lg mt-1 block w-full border border-black" value={name} onChange={(e) => setName(e.target.value)} />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-black text-sm font-medium">Email</label>
            <input type="email" id="email" className="form-input rounded-lg mt-1 block w-full border border-black" value={email} onChange={(e) => setEmail(e.target.value)} />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block text-black text-sm font-medium">Password</label>
            <input type="password" id="password" className="form-input rounded-lg mt-1 block w-full border border-black" value={password} onChange={(e) => setPassword(e.target.value)} />
          </div>
          <div className="text-center">
            <button type="submit" className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-md shadow-md transition duration-300">Sign In</button>
          </div>
        </form>
      </div>
    </div>
  );
};

