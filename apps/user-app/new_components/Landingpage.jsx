import React from 'react';
// import './Paylink.css'; // Ensure to create this file for custom styles

const LandingPage = () => {
  return (
    <div className="bg-custom min-h-screen flex flex-col">
      {/* Navbar */}
      <nav className="navbar flex justify-between items-center p-4 md:p-6 navbar-font">
        <div className="text-xl md:text-2xl font-bold text-shadow text-white bounce">
          Paylink
          <h2 className="text-sm md:text-xl text-purple-200 mb-0">Secure and Fast</h2>
        </div>
        <div className="flex space-x-4 md:space-x-8 text-white">
          <a href="#" className="hover:underline text-base md:text-lg flex items-center"><i className="fas fa-home mr-2"></i>Home</a>
          <a href="#" className="hover:underline text-base md:text-lg flex items-center"><i className="fas fa-info-circle mr-2"></i>About</a>
          <a href="#" className="hover:underline text-base md:text-lg flex items-center"><i className="fas fa-cogs mr-2"></i>Services</a>
          <a href="#" className="hover:underline text-base md:text-lg flex items-center"><i className="fas fa-envelope mr-2"></i>Contact</a>
          <a href="#" className="hover:underline text-base md:text-lg border border-white px-3 py-3 rounded-md "><i className="fas fa-user-plus mr-2"></i>Sign up</a>
        </div>
      </nav>

      {/* Main Section */}
      <div className="flex-grow container  px-6 py-20 flex  lg:flex-row items-center justify-center gap-8">
        <div className=" w-1/2 lg:w-1/2  px-4 rounded-lg shadow-lg  mb-8 lg:mb-0 slide-in-left lg:slide-in-right">
          <h1 className="text-4xl lg:text-5xl font-bold mb-6 leading-tight text-white ">Fast, flexible and secure money transfers</h1>
          <p className="text-lg mb-8 leading-relaxed text-white " >
            Transfer money quickly and securely to anyone, anywhere. With Paylink, your transactions are fast, secure, and easy to manage.
          </p>
        <button className='text-white text-xl btn border bg-purple-900 px-4 py-2 rounded-md hover:bg-blue-500'>Create Wallet</button>
        </div>
        <div className="w-1/2 lg:w-1/2 flex justify-center items-center   lg:mt-0">
          <img src="https://i.ibb.co/g4KYsxX/5179450-removebg.png" alt="Money Transfer Illustration" className="w-2/3 lg:w-2/3 h-auto rounded-lg shadow-lg fade-in" />
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
