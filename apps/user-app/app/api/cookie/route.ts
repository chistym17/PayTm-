import { NextApiRequest, NextApiResponse } from 'next';
import setCookies from '../../../lib/actions/setcookies';


export const  POST=async(req: NextApiRequest, res: NextApiResponse)=>{
  const response = await setCookies(req, res);
  console.log(response)
  return res.status(200).json(response);
}
