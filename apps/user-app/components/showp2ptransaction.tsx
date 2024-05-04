"use client"
import { useState, useEffect } from 'react';
import { Card } from "@repo/ui/card";
import getp2ptransactions from '../lib/actions/getp2ptransactions';

export const ShowP2P = () => {
    const [transactions, setTransactions] = useState([]);

    useEffect(() => {
        const fetchTransactions = async () => {
            try {
                const data = await getp2ptransactions();
                setTransactions(data);
            } catch (error) {
                console.error("Error fetching transactions:", error);
            }
        };

        fetchTransactions();
    }, []);
  console.log(transactions)
    if (!transactions.length) {
        return (
            <Card title="Recent Transactions">
                <div className="text-center pb-8 pt-8 bg-purple-300 p-6 w-96 text-black font-semibold">
                    No recent transactions
                </div>
            </Card>
        );
    }

    return (
        <Card title="Recent Transactions">
            <div className="pt-2 w-96 bg-purple-300 text-black shadow-md p-5">
                {transactions.map(t => (
                    <div key={t.time} className="flex justify-between">
                        <div>
                            <div className="text-sm">Sent to {t.to.email}</div>
                            <div className="text-slate-600 text-xs">{t.time.toDateString()}</div>
                        </div>
                        <div className="flex flex-col justify-center">+ Rs {t.amount / 100}</div>
                    </div>
                ))}
            </div>
        </Card>
    );
};
