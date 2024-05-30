import { Card } from "./Card";

export const ShowP2P = ({transactions}) => {
   
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
