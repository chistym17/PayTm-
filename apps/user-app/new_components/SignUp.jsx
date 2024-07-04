import React, { useState } from 'react';
import './Signup.css';

const Signup = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSignIn = () => {
    console.log('Username:', username);
    console.log('Password:', password);
  };

  return (
    <div className="card">
      <h1 className="title">Welcome to PayLink</h1>
      <p className="subtitle">Transfer money quickly and securely with Paylink.</p>
      <input
        type="text"
        placeholder="USER NAME"
        className="input"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="password"
        placeholder="PASSWORD"
        className="input"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button className="btn" onClick={handleSignIn}>SIGN IN</button>
      <div className="footer">
        <a href="#" className="link">Sign up now!</a>
        <div className="or">or</div>
        <div className="social-icons">
          <a href="#" className="icon"><i className="fab fa-facebook"></i></a>
          <a href="#" className="icon"><i className="fab fa-twitter"></i></a>
          <a href="#" className="icon"><i className="fab fa-google"></i></a>
        </div>
      </div>
    </div>
  );
};

export default Signup;
