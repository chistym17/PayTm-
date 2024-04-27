// pages/signin.tsx
"use client"
import { useState } from 'react';
import { signIn } from 'next-auth/react';

export default function page() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const result = await signIn('credentials', {
      email,
      password,
      redirect: false, // Prevent automatic redirection
    });
    console.log(result)
    // if (!result.error) {
    //   // If no error, user is successfully authenticated
    //   // Redirect to the desired page
    //   window.location.href = '/dashboard';
    // } else {
    //   // Handle sign-in errors
    //   console.error(result.error);
    //   // Show error message to the user
    //   alert('Failed to sign in');
    // }
  };

  return (
    <div>
      <h1>Sign In</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Sign In</button>
      </form>
    </div>
  );
}
