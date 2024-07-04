import  { useState } from "react";
import { CircularProgress } from "@mui/material";
import './Paylink.css'; // Ensure to create this file for custom styles
import { useSession } from "next-auth/react";
import toast from "react-hot-toast";

const Wallet = () => {
  const { data: session, status } = useSession();
  const [redirecting, setRedirecting] = useState(false);
  console.log(session,status)
  const handleButtonClick = () => {
    if (status === 'loading') return; // Wait until session data is loaded

    if (!session) {
      toast.error("You must be logged in.");
      setRedirecting(true);
      setTimeout(() => {
        window.location.href = "/SignIn";
      }, 1000);
    } else {
      window.location.href = "/p2pTransaction";
    }
  };

  return (
    <section className="bg-white py-6 ">
    

      <div className=" ">
        {/* First Div */}
        <div className="flex flex-row-reverse items-center justify-center ">
         

          <div className="md:w-1/2 mt-4 md:mt-0">
            <img
              src="https://i.ibb.co/sVmFQL4/Wavy-Tech-31-Single-01.jpg"
              alt="Send Money"
              className="w-2/3 h-[400px]"
            />
          </div>

          <div className="md:w-1/2 md:mr-4  mt-10 text-center md:text-left ">
            <h2 className="text-3xl text-black font-semibold mb-4">
              Send Money to Someone
            </h2>
            <p className="text-black mb-6">
              Transfer money instantly to your friends and family with ease. 
            </p>
            {redirecting ? (
              <div className="text-center">
                <CircularProgress />
                <div className="loader inline-block"></div>
              </div>
            ) : (
              <button
                className="bg-custom hover:bg-blue-600 text-white py-2 px-4 rounded-md shadow-md transition duration-300"
                onClick={handleButtonClick}
              >
                Send Money
              </button>
            )}
          </div>

        </div>
      </div>
    </section>
  );
};

export default Wallet;
