"use server"
import { getServerSession } from 'next-auth';
import React from 'react';
import jwt from 'jsonwebtoken';
import { authOptions } from '../../app/lib/auth';
import { cookies } from 'next/headers';

async function setCookies() {
  const session=await getServerSession(authOptions)
  console.log(session)
  try {
    cookies().set({
      name: session?.user?.name,
      value: session?.user?.id,
      httpOnly: true,
      path: '/',
    })

    return { message: 'Cookie set successfully' };
  } catch (error) {
    console.error(error);
  }
}

export default setCookies;
