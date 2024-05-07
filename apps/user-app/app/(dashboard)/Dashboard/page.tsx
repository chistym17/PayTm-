import { BalanceCard } from "../../../components/BalanceCard";
import { OnRampTransactions } from "../../../components/OnRampTransactions";
import { getServerSession } from "next-auth";
import { authOptions } from "../../lib/auth";
import AddMoneyCard from "../../../components/AddMoney";
import {  PrismaClient } from "@prisma/client";
import createwallet from "../../../components/createwallet";
import DashTab from "./components/DashTab";
import getp2ptransactions from "../../../lib/actions/getp2ptransactions";
import getreceivedtransactions from "../../../lib/actions/showreceivedtrx";

const prisma=new PrismaClient()

export async function getBalance() {
    const session = await getServerSession(authOptions);
    const balance = await prisma.balance.findFirst({
        where: {
            userId: Number(session?.user?.id)
        }
    });
    if(!balance)
        {
           const res= await createwallet()

        }
    return {
        amount: balance?.amount || 0,
        locked: balance?.locked || 0
    }
}





export async function getOnRampTransactions() {
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