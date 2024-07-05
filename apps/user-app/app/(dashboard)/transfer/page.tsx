//@ts-nocheck
import  BalanceCircle  from "../../../components/BalanceCircle";
import { OnRampTransactions } from "../../../components/OnRampTransactions";
import { getServerSession } from "next-auth";
import { authOptions } from "../../lib/auth";
import AddMoneyCard from "../../../components/AddMoney";
import {  PrismaClient } from "@prisma/client";
import createwallet from "../../../components/createwallet";

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

    return <div className="w-screen">
        <div className="text-4xl text-[#6a51a6] pt-8 mb-8 font-bold text-center">
            Transfer money to your Wallet
        </div>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 items-center p-4">
            <div>
                <AddMoneyCard />
            </div>
            <div>
                <BalanceCircle balance={balance.amount} />
             
            </div>
        </div>
    </div>
}