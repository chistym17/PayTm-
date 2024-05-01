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
// export default async function Page() {
//   // const session = await getServerSession(authOptions);
//   // if (session?.user) {
//   //   redirect('/')
//   // } else {
//   //   redirect('/api/auth/signin')

//   // }
//   return (

//   )


// }

const navItems = [
  { name: "Home", link: "/" },
  { name: "About", link: "/about" },
  { name: "Contact", link: "/contact" }
];

const items = [
  {
    title: "P2P Transactions",
    description: "Easily send and receive money directly to and from friends, family, or anyone else with just a few taps. Enjoy seamless peer-to-peer transactions without any hassle.",
    link: "/p2p-transactions",
  },
  {
    title: "Bank Transfer",
    description: "Transfer money from your bank account to anyone, anywhere, anytime. With our secure and reliable bank transfer feature, you can conveniently manage your finances.",
    link: "/bank-transfer",
  },
  {
    title: "Personalized Profile",
    description: "Create your own profile and personalize it according to your preferences. Showcase your interests, connect with others, and manage your account with ease.",
    link: "/profile",
  },
];


const page = () => {
  return (
    <div className="">
      <AppBar navItems={navItems} className="" />

      <div className=" max-w-6xl  h-[100vh] mx-auto ">

        <div>
          <div className=" text-black py-20 px-4 md:px-10 text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-4"><span className="text-purple-500 ">Paylink</span></h1>
            <p className="text-lg md:text-xl mb-8">Your trusted platform for seamless money transfers and financial management</p>
            <div className="h-[20px]">
              <Typewriter text='Connect. Transfer. Empower'></Typewriter>

            </div>
          </div>

          <UserBar></UserBar>

        </div>


      </div>


      <div className="mt-20 max-w-6xl mx-auto">
        <Feature></Feature>
        <Feat></Feat>


      </div>




    </div>
  );
};

export default page;
