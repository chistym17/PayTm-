import { PrismaClient } from "@prisma/client";
import express from "express";

const app = express();
const prisma = new PrismaClient()
app.post("/hdfcWebhook", async (req, res) => {
    const paymentInformation = {
        token: req.body.token,
        userId: req.body.user_identifier,
        amount: req.body.amount
    };

    try {

        await prisma.balance.update({
            where: {
                userId: Number(paymentInformation.userId)

            },
            data: {
                amount:
                {
                    increment: Number(paymentInformation.amount)
                },
            }

        }),


            await prisma.onRampTransaction.update({
                where: {
                    token: (paymentInformation.token)
                },
                data: {
                    status: 'Success'
                },

            })

        res.json({
            message: "Captured"
        })


    } catch (e) {
        console.error(e);
        res.status(411).json({
            message: "Error while processing webhook"
        })
    }

})