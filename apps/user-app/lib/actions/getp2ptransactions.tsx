"use server"
import { getServerSession } from "next-auth";
import { authOptions } from "../../app/lib/auth";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const getp2ptransactions = async () => {
    const session = await getServerSession(authOptions);
    const txns = await prisma.p2pTransfer.findMany({
        where: {
            fromUserId: Number(session?.user?.id)
        },
        include: {
            toUser: true 
        }
    });
    console.log(txns)
    
    return txns.map(t => ({
        from: t.fromUserId,
        time: t.timestamp,
        amount: t.amount,
        to: {
            id: t.toUserId,
            name: t.toUser.name, 
            email: t.toUser.email 
        }
    }));
};

export default getp2ptransactions;
