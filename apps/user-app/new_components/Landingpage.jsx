import React from 'react';
import Navbar from './Navbar';

const LandingPage = () => {
  return (
    <div className="bg-custom min-h-screen flex flex-col">
      <Navbar></Navbar>
      <div className="flex-grow container  px-6 py-20 flex  lg:flex-row items-center justify-center gap-8">
        <div className=" w-1/2 lg:w-1/2  px-4 rounded-lg   mb-8 lg:mb-0 slide-in-left lg:slide-in-right">
          <h1 className="text-4xl lg:text-5xl font-bold mb-6 leading-tight text-white ">Fast, flexible and secure money transfers</h1>
          <p className="text-lg mb-8 leading-relaxed text-white " >
            Transfer money quickly and securely to anyone, anywhere. With Paylink, your transactions are fast, secure, and easy to manage.
          </p>
        <button className='text-white text-xl btn border bg-purple-900 px-4 py-2 rounded-md hover:bg-blue-500'>Create Wallet</button>
        </div>
        <div className="w-1/2 lg:w-1/2 flex justify-center items-center   lg:mt-0">
          <img src="https://i.ibb.co/g4KYsxX/5179450-removebg.png" alt="Money Transfer Illustration" className="w-2/3 lg:w-2/3 h-auto rounded-lg fade-in" />
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
