import { PrismaClient } from "@prisma/client";
import express from "express";

const app = express();
const bodyParser = require('body-parser');
app.use(bodyParser.json());

const prisma = new PrismaClient();

app.post("/hdfcWebhook", async (req, res) => {
    const paymentInformation = {
        userId: req.body.id,
        amount: req.body.amount
    };
    console.log(paymentInformation);

    try {    
      const bal=  await prisma.balance.update({
            where: {
                userId: paymentInformation.userId
            },
            data: {
                amount: {
                    increment: Number(paymentInformation.amount)
                }
            }
        });
        console.log(bal);

        // await prisma.onRampTransaction.update({
        //     where: {
        //         token: paymentInformation.token
        //     },
        //     data: {
        //         status: 'Success'
        //     }
        // });

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
