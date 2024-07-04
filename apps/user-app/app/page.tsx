//@ts-nocheck
"use client"
import './globals.css'

import LandingPage from "../new_components/Landingpage"
import TopFeatures from "../new_components/TopFeatures"
const navItems = [
  { name: "Home", link: "/" },
  { name: "Transfer", link: "/transfer" },
  { name: "Send", link: "/p2ptransaction" }
];



const page = async () => {
  return (
    // <div className="max-w-6xl mx-auto">
    //   {/* <AppBar navItems={navItems} className="" /> */}

    //   {/* <div className=" max-w-6xl  h-[100vh] mx-auto  ">

    //     <div>
    //       <div className=" text-black py-20 px-4 md:px-10 text-center">
    //         <h1 className="text-5xl md:text-7xl font-bold mb-4"><span className="text-purple-500 ">kahon-cheat-fund </span></h1>
    //         <p className="text-lg md:text-2xl mb-8 mt-2">21 din me paisa doublee!!</p>
    //         <div className="h-[20px]">
    //           <Typewriter text='Connect. Transfer. Empower'></Typewriter>

    //         </div>
    //       </div>

    //       <UserBar></UserBar>

    //     </div>


    //   </div> */}


    //   {/* <div className="mt-20 h-[800px] ">
    //     <SlideInFromLeft>

    //       <Feature></Feature>

    //     </SlideInFromLeft>



    //     <SlideInFromRight>
    //       <Feat></Feat>

    //     </SlideInFromRight>

    //   </div>
    //   <div className=" mt-16">

    //     <Footer></Footer>


    //   </div> */}

    // </div>
    <div>


      <LandingPage></LandingPage>
      <TopFeatures></TopFeatures>
    </div>
  );
};

export default page;
