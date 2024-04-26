
"use server"
import getuserinfo from "./getuserinfo";
import axios from 'axios'

async function completetransaction  (amount:Number)  {
    const inf=await getuserinfo()
    // if(!inf?.id || !inf?.token )return{
    //     message:"Not Authorized"
    // }
    console.log(inf)
    const info={
        id:inf.id,
        token:inf.token,
        amount:amount

    }
    const res=await axios.post('http://localhost:3003/hdfcWebhook',info)
    console.log(res);
};

export default completetransaction;