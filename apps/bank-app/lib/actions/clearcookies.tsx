'use server'
 
import { cookies } from 'next/headers'
 
export async function ClearCookies() {
  cookies().delete('user')
  cookies().delete('token')


}