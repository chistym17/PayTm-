"use server"
import { getServerSession } from 'next-auth';
import { authOptions } from '../../app/lib/auth';
import { cookies } from 'next/headers';

async function setCookies(token:string) {
  const session=await getServerSession(authOptions)
  console.log(session)
  try {
    cookies().set({
      name: 'user',
      value: session?.user?.id,
      httpOnly: true,
      path: '/',
    })

    cookies().set({
      name: 'token',
      value: token,
      httpOnly: true,
      path: '/',
    })

    return { message: 'Cookie set successfully' };
  } catch (error) {
    console.error(error);
  }
}

export default setCookies;
