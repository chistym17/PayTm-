"use server"
import { getServerSession } from 'next-auth';
import React from 'react';
import { authOptions } from '../../app/lib/auth';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function createtransactions(provider:string, amount:number) {
    try {
        const session = await getServerSession(authOptions);
        if (!session?.user) {
            return {
                message: 'Not Authorized'
            };
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

        return {
            message: 'transaction added',
            token: token
        };
    } catch (error) {
        console.error("Error creating transaction:", error);
        return {
            message: 'Error creating transaction'
        };
    }
};

export default createtransactions;
