import  { useState } from "react";
import { CircularProgress } from "@mui/material";

const Feature = () => {
  const [redirecting, setRedirecting] = useState(false);

  const handleButtonClick = () => {
    // Show loading indicator
    setRedirecting(true);

    // Simulate a delay before redirecting
    setTimeout(() => {
      // Redirect the user
      window.location.href = "/p2pTransaction";
    }, 1000); // Adjust the delay as needed
  };

  return (
    <section className="bg-white py-6">
      <h1 className="text-center font-bold text-gray-700 mb-3 text-4xl">
        Top Features
      </h1>

      <div className="container mx-auto ">
        {/* First Div */}
        <div className="flex flex-col-reverse items-center  md:flex-row-reverse md:items-start mb-8 md:mb-0">
          <div className="md:w-1/2 md:mr-4  mt-10 text-center md:text-left ">
            <h2 className="text-2xl text-black font-semibold mb-4">
              Send Money to Someone
            </h2>
            <p className="text-black mb-6">
              Transfer money instantly to your friends and family with ease. Add
              more description here if needed.
            </p>
            {redirecting ? (
              <div className="text-center">
                <CircularProgress />
                <div className="loader inline-block"></div>
              </div>
            ) : (
              <button
                className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-md shadow-md transition duration-300"
                onClick={handleButtonClick}
              >
                Send Money
              </button>
            )}
          </div>
          <div className="md:w-1/2 mt-4 md:mt-0">
            <img
              src="https://i.ibb.co/CV7CZcj/b3.jpg"
              alt="Send Money"
              className="w-2/3 h-[300px] rounded-md shadow-md"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Feature;
