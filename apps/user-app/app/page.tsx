import { getServerSession } from "next-auth";
import { redirect } from 'next/navigation'
import { authOptions } from "./lib/auth";
import Navbar from "../components/Navbar";
import { Hero } from "../components/Hero";
import './globals.css'
import { AppBar } from "../components/Appbar";
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

const page = () => {
  return (
    <div className="">
      <AppBar navItems={navItems} className="" />

      <div className="h-[100vh]">
        <Hero>

        </Hero>

      </div>





    </div>
  );
};

export default page;
