import { getServerSession } from "next-auth";
import { authOptions } from "../../lib/auth";
import {  PrismaClient } from "@prisma/client";
import createwallet from "../../../components/createwallet";
import DashTab from "./components/DashTab";
import getp2ptransactions from "../../../lib/actions/getp2ptransactions";
import getreceivedtransactions from "../../../lib/actions/showreceivedtrx";

const prisma=new PrismaClient()
interface Balance {
    amount: number;   
    locked: number;   
}
 async function getBalance(): Promise<Balance | null> {
    const session = await getServerSession(authOptions); 
    
    if (!session || !session.user || !session.user.id) {
        throw new Error("Invalid session or missing user id");
    }

    const balance = await prisma.balance.findFirst({
        where: {
            userId: Number(session.user.id)
        }
    });

    if (!balance) {
        await createwallet();
        return null; 
    }

    return {
        amount: balance.amount || 0, 
        locked: balance.locked || 0  
    };
}


 async function getOnRampTransactions() {
    const session = await getServerSession(authOptions);
    const txns = await prisma.onRampTransaction.findMany({
        where: {
            userId: Number(session?.user?.id)
        }
    });
    return txns.map(t => ({
        time: t.startTime,
        amount: t.amount,
        status: t.status,
        provider: t.provider
    }))
}

export default async function() {
    
    const balance = await getBalance();
    const transactions = await getOnRampTransactions();
    const data = await getp2ptransactions();
    const received=await getreceivedtransactions()
    


    return <div className="w-screen">
       <DashTab  balanceData={balance} transactionsData={transactions} p2pdata={data} received={received}></DashTab>
    </div>
}