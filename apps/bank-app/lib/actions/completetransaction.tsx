"use server"
import getuserinfo from "./getuserinfo";
import axios from 'axios';

async function completetransaction(amount: number) {
    try {
        const inf = await getuserinfo();
        if (!inf?.id || !inf?.token) {
            return { message: "Not Authorized" };
        }

        const info = {
            id: inf.id,
            token: inf.token,
            amount: amount
        };

        const response = await axios.post('http://ec2-13-48-26-79.eu-north-1.compute.amazonaws.com:3002/hdfcWebhook', info);
        // console.log(response.data.data)
        return response.data; 
    } catch (error) {
        console.error(error);
        return { message: "Error completing transaction" };
    }
}

export default completetransaction;
