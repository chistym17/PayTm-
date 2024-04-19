import { getServerSession } from "next-auth";
import { redirect } from 'next/navigation'
import { authOptions } from "./lib/auth";
import Navbar from "./components/Navbar";

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
    <div>
      <Navbar></Navbar>
    </div>
  );
};

export default page;
