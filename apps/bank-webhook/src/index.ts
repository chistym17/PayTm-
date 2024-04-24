import { PrismaClient } from "@prisma/client";
import express from "express";

const app = express();
const prisma = new PrismaClient();

// POST endpoint for HDFC webhook
app.post("/hdfcWebhook", async (req, res) => {
    const paymentInformation = {
        token: req.body.token,
        userId: req.body.user_identifier,
        amount: req.body.amount
    };
    console.log(paymentInformation);

    try {
        await prisma.balance.update({
            where: {
                userId: Number(paymentInformation.userId)
            },
            data: {
                amount: {
                    increment: Number(paymentInformation.amount)
                }
            }
        });

        await prisma.onRampTransaction.update({
            where: {
                token: paymentInformation.token
            },
            data: {
                status: 'Success'
            }
        });

        res.json({
            message: "Captured"
        });
    } catch (e) {
        console.error(e);
        res.status(500).json({
            message: "Error while processing webhook"
        });
    }
});

// GET endpoint to check server health
app.get("/health", (req, res) => {
    res.status(200).json({
        message: "Server is running and healthy"
    });
});

const PORT = 3003;
app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});
