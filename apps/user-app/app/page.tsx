"use client"

import { getServerSession } from "next-auth";
import { redirect } from 'next/navigation'
import { authOptions } from "./lib/auth";
import Navbar from "../components/Navbar";
import { Hero } from "../components/Hero";
import './globals.css'
import { AppBar } from "../components/Appbar";
import { Cards } from "../components/Cards";
import Typewriter from "../components/TypeAnimation";
import UserBar from "../components/userbar";
import { WobbleCard } from "../components/userlogin";
import Feature from "../components/Feature";
import Feat from "../components/Feat";
import Footer from "../components/Footer";


const navItems = [
  { name: "Home", link: "/" },
  { name: "Transfer", link: "/transfer" },
  { name: "Send", link: "/p2ptransaction" }
];



const page = async() => {
  return (
    <div className="max-w-6xl mx-auto">
      <AppBar navItems={navItems} className="" />
  
      <div className=" max-w-6xl  h-[100vh] mx-auto  ">

        <div>
          <div className=" text-black py-20 px-4 md:px-10 text-center">
            <h1 className="text-5xl md:text-7xl font-bold mb-4"><span className="text-purple-500 ">Paylink</span></h1>
            <p className="text-lg md:text-2xl mb-8 mt-2">Your trusted platform for seamless money transfers and financial management</p>
            <div className="h-[20px]">
              <Typewriter text='Connect. Transfer. Empower'></Typewriter>

            </div>
          </div>

          <UserBar></UserBar>

        </div>


      </div>


      <div className="mt-20 ">
        <Feature></Feature>
        <Feat></Feat>


      </div>
      <div className="bg-black">



      </div>
      <Footer></Footer>

    </div>
  );
};

export default page;
