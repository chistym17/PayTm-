//@ts-nocheck
"use client"
import './globals.css'

import LandingPage from "../new_components/Landingpage"
import TopFeatures from "../new_components/TopFeatures"
import SlideInFromLeft from '../components/animations/SlideLeft.';
import Feature from '../components/Feature';
import SlideInFromRight from '../components/animations/SlideRight';
import Feat from '../components/Feat';
import Signup from "../new_components/SignUp"

import Main from '../new_components/main'
import Footer from '../components/Footer';
const navItems = [
  { name: "Home", link: "/" },
  { name: "Transfer", link: "/transfer" },
  { name: "Send", link: "/p2ptransaction" }
];



const page = async () => {
  return (

    <div>

        <LandingPage></LandingPage>


<div className=''>

<TopFeatures></TopFeatures>

</div>


      <div className='mt-10 max-w-6xl mx-auto'>

        <Main></Main>

      </div>
   <Footer></Footer>

    </div>
  );
};

export default page;
