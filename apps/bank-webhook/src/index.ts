import { PrismaClient } from "@prisma/client";
import express from "express";

export const app = express();
const bodyParser = require('body-parser');
app.use(bodyParser.json());

const prisma=new PrismaClient()

app.post("/hdfcWebhook", async (req, res) => {
    const paymentInformation = {
        userId: req.body.id,
        token:req.body.token,
        amount: req.body.amount
    };

    const transaction = await prisma.onRampTransaction.findUnique({
        where: {
            token: paymentInformation.token
        }
    });

    if (!transaction || transaction.status == 'Success') {
        return res.status(400).json({
            message: "Transaction already completed",
            error: "TransactionError"
        });
    }

    try {
        await prisma.$transaction([
            prisma.balance.update({
                where: {
                    userId: Number(paymentInformation.userId)
                },
                data: {
                    amount: {
                        increment: Number(paymentInformation.amount)
                    }
                }
            }),
            prisma.onRampTransaction.updateMany({
                where: {
                    token: paymentInformation.token
                }, 
                data: {
                    status: "Success",
                }
            })
        ]);

        res.status(200).json({
            message: "Transaction Captured"
        });
    } catch(e) {
        console.error(e);
        res.status(500).json({
            message: "Error while processing webhook",
            error: "ServerError"
        });
    }
});


app.get("/health", (req, res) => {
    res.status(200).json({
        message: "Server is running and healthy"
    });
});

const PORT = 3002;
app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});
