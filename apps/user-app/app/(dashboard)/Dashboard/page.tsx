import { getServerSession } from "next-auth";
import { authOptions } from "../../lib/auth";
import { PrismaClient } from "@prisma/client";
import createwallet from "../../../components/createwallet";
import getp2ptransactions from "../../../lib/actions/getp2ptransactions";
import getreceivedtransactions from "../../../lib/actions/showreceivedtrx";
import TotalBalanceBox from './components/TotalBalanceBox'
import HeaderBox from './components/Headerbox'
import RightSidebar from './components/RightSidebar'
import '../../globals.css'
import DashTab from "./components/DashTab";
const prisma = new PrismaClient()
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

export default async function () {
    const session = await getServerSession(authOptions)
    const balance = await getBalance();
    const transactions = await getOnRampTransactions();
    const data = await getp2ptransactions();
    const received = await getreceivedtransactions()

    console.log(session)

    return (
        <div className="">
            <div className="flex-1 p-8">
                <header className="py-4">
                    <HeaderBox
                        type="greeting"
                        title="Welcome"
                        user={session?.user?.name}
                        subtext="Access and manage your account and transactions efficiently."
                    />

                    <TotalBalanceBox
                        // accounts={accounts}
                        // totalBanks={accounts?.totalBanks}
                        totalCurrentBalance={balance.amount}
                    />
                </header>
            </div>
            <DashTab transactionsData={transactions} p2pdata={data} received={received}></DashTab>
            <RightSidebar 
                user={session?.user}
            />
        </div>
    )
}