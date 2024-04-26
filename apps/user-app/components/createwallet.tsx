
"use server"
import { PrismaClient } from "@prisma/client";
import { getServerSession } from "next-auth";
import { authOptions } from "../app/lib/auth";

const prisma = new PrismaClient();

const createwallet = async () => {
    const session = await getServerSession(authOptions);
    const userId = session.user.id; // Assuming session contains user information

    try {
        const newBalance = await prisma.balance.create({
            data: {
                userId: Number(userId),
                amount: 0, 
                locked: 0 
            }
        });
        console.log("Wallet created successfully:", newBalance);
    } catch (error) {
        console.error("Error creating wallet:", error);
    }
};

export default createwallet;
