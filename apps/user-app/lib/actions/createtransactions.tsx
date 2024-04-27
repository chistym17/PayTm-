"use server"
import { getServerSession } from 'next-auth';
import React from 'react';
import { authOptions } from '../../app/lib/auth';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function createtransactions(provider: string, amount: number): Promise<{ message: string; token?: string }> {
    return new Promise<{ message: string; token?: string }>(async (resolve, reject) => {
        try {
            const session = await getServerSession(authOptions);
            if (!session?.user) {
                resolve({ message: 'Not Authorized' });
                return;
            }

            const token = (Math.random() * 1000).toString();
            await prisma.onRampTransaction.create({
                data: {
                    provider,
                    status: "Processing",
                    startTime: new Date(),
                    token: token,
                    userId: Number(session?.user?.id),
                    amount: amount * 100
                }
            });

            resolve({ message: 'transaction added', token: token });
        } catch (error) {
            console.error("Error creating transaction:", error);
            reject({ message: 'Error creating transaction' });
        }
    });
};

export default createtransactions;
