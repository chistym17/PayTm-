
"use server"
import getuserinfo from "./getuserinfo";
import axios from 'axios'

async function completetransaction  (amount:Number)  {
    const id=await getuserinfo()
    if(!id)return{
        message:"Not Authorized"
    }
    const info={
        id:id,
        amount:amount

    }
    const res=await axios.post('http://localhost:3003/hdfcWebhook',info)
    console.log(res);
};

export default completetransaction;