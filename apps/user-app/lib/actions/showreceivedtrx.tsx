"use server"
import { getServerSession } from "next-auth";
import { authOptions } from "../../app/lib/auth";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const getreceivedtransactions = async () => {
    const session = await getServerSession(authOptions);

    const transactionsToUser = await prisma.p2pTransfer.findMany({
        where: {
          toUserId: Number(session?.user?.id)
        },
        include: {
          fromUser: true,
        }
      });

    console.log("here-",transactionsToUser)
    
 return transactionsToUser
};

export default getreceivedtransactions;
