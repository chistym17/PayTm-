import { useState } from "react";
import { CircularProgress } from "@mui/material";
import './Paylink.css';

const Bank = () => {
  const [redirecting, setRedirecting] = useState(false);

  const handleButtonClick = () => {
    setRedirecting(true);

    setTimeout(() => {
      window.location.href = "/transfer";
    }, 1000);
  };

  return (
    <section className="bg-white py-5">
      <div className="">
        {/* Second Div */}
        <div className="flex   items-center justify-center">
          <div className="md:w-1/2 md:mr-4 text-center md:text-left">
            <h2 className="text-2xl text-black font-bold mb-4">
              Transfer Balance to Your Wallet
            </h2>
            <p className="text-black mb-6">
              Easily transfer your balance from bank to your wallet anytime.<br></br>
            </p>

            {redirecting ? (
              <div className="text-center">
                <CircularProgress></CircularProgress>
                <div className="loader inline-block"></div>
              </div>
            ) : (
              <button
                className="bg-custom hover:bg-blue-600 text-white py-2 px-4 rounded-md shadow-md transition duration-300"
                onClick={handleButtonClick}
              >
                Transfer to Wallet
              </button>
            )}
          </div>
          <div className="md:w-1/2 mt-4 md:mt-0">
            <img
              src="https://i.ibb.co/9ZTqk04/Wavy-Bus-21-Single-05.jpg"
              alt="Transfer to Wallet"
              className="w-2/3 h-[400px] "
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Bank;
