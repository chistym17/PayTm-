"use server"
import { getServerSession } from "next-auth";
import { PrismaClient, Prisma } from "@prisma/client";
import { authOptions } from "../../app/lib/auth";

const prisma = new PrismaClient();

export async function sendmoney(to: string, amount: number) {
    try {
        const session = await getServerSession(authOptions);
        const from = session?.user?.id;
        if (!from) {
            throw new Error("User not authenticated");
        }

        const toUser = await prisma.user.findFirst({
            where: {
                email: to
            }
        });

        if (!toUser) {
            throw new Error("Recipient not found");
        }

        await prisma.$transaction(async (tx) => {
            const fromBalance = await tx.balance.findUnique({
                where: { userId: Number(from) }
            });

            if (!fromBalance || fromBalance.amount < amount) {
                throw new Error('Insufficient funds');
            }

            await tx.balance.update({
                where: { userId: Number(from) },
                data: { amount: { decrement: amount } },
            });

            await tx.balance.update({
                where: { userId: toUser.id },
                data: { amount: { increment: amount } },
            });

            await tx.p2pTransfer.create({
                data: {
                    fromUserId: Number(from),
                    toUserId: toUser.id,
                    amount,
                    timestamp: new Date()
                }
            });
        });

        return { success: true, message: "Transaction successful" };
    } catch (error) {
        return { success: false, message: error.message };
    }
}
