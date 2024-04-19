import React from 'react';

const Hero = () => {
  return (
    <div className="min-h-screen  py-12 px-4 lg:px-24 flex items-center justify-between">
      {/* Left side with text */}
      <div className="max-w-md text-black">
        <h1 className="text-4xl font-bold mb-4">Welcome to Our Payment App</h1>
        <p className="text-lg mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et justo quis risus consectetur feugiat.</p>
        <p className="text-lg mb-4">Fusce commodo, ligula vel porta condimentum, lectus lectus commodo dolor, eget vestibulum urna tortor ut velit.</p>
        <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">Get Started</button>
      </div>
      {/* Right side with image */}
      <div className="hidden lg:block">
        <img src="path_to_your_image" alt="Payment App" className="w-64 h-auto" />
      </div>
    </div>
  );
}

export default Hero;
