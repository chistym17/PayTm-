import  { useState } from "react";
import { CircularProgress } from "@mui/material";

const Feat = () => {
  const [redirecting, setRedirecting] = useState(false);

  const handleButtonClick = () => {
    // Show loading indicator
    setRedirecting(true);

    // Simulate a delay before redirecting
    setTimeout(() => {
      // Redirect the user
      window.location.href = "/transfer";
    }, 1000); // Adjust the delay as needed
  };

  return (
    <section className="bg-white py-5">
      <div className="container mx-auto ">
        {/* Second Div */}
        <div className="flex flex-col mt-10 items-center  md:flex-row md:items-start">
          <div className="md:w-1/2 md:mr-4 text-center md:text-left mt-10">
            <h2 className="text-2xl text-black font-semibold mb-4">
              Transfer Balance to Your Wallet
            </h2>
            <p className="text-black mb-6">
              Easily transfer your balance from bank to your wallet anytime. Add
              more description here if needed.
            </p>
            {redirecting ? (
              <div className="text-center">
                <CircularProgress></CircularProgress>
                <div className="loader inline-block"></div>
              </div>
            ) : (
              <button
                className="bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded-md shadow-md transition duration-300"
                onClick={handleButtonClick}
              >
                Transfer to Wallet
              </button>
            )}
          </div>
          <div className="md:w-1/2 mt-4 md:mt-0">
            <img
              src="https://i.ibb.co/FKYdtVN/bank.jpg"
              alt="Transfer to Wallet"
              className="w-2/3 h-[300px] rounded-md shadow-md"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Feat;
