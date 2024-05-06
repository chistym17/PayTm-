import { Card } from "@repo/ui/card";

export const Showreceived = ({transactions}) => {
   
    return (
        <Card title="Received Transactions">
            <div className="pt-2 w-96 bg-purple-300 text-black shadow-md p-5">
                {transactions.map(t => (
                    <div key={t.timestamp} className="flex justify-between">
                        <div>
                            <div className="text-sm">Sent from {t.fromUser.email}</div>
                            <div className="text-slate-600 text-xs">{t.timestamp.toDateString()}</div>
                        </div>
                        <div className="flex flex-col justify-center text-green-900">+ Rs {t.amount / 100}</div>
                    </div>
                ))}
            </div>
        </Card>
    );
};
