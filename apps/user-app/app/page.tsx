import { getServerSession } from "next-auth";
import { redirect } from 'next/navigation'
import { authOptions } from "./lib/auth";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import './globals.css'
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

const page = () => {
  return (
    <div className="">
      <Navbar></Navbar>
      <Hero></Hero>
    </div>
  );
};

export default page;
