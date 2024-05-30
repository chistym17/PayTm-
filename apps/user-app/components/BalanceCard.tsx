import { Card } from "./Card";

export const BalanceCard = ({ amount, locked }: {
    amount: number;
    locked: number;
}) => {
    return <Card title={"Balance"} >
        <div className="bg-purple-300 text-black p-4 rounded-lg shadow-md w-96">

            <div className="flex justify-between border-b border-slate-300  pb-2">
                <div className="font-semibold">
                    Unlocked balance
                </div>
                <div>
                    {amount / 100} INR
                </div>
            </div>
            <div className="flex justify-between border-b border-slate-300 py-2">
                <div className="font-semibold">
                    Total Locked Balance
                </div>
                <div>
                    {locked / 100} INR
                </div>
            </div>
            <div className="flex justify-between border-b border-slate-300 py-2">
                <div className="font-semibold">
                    Total Balance
                </div>
                <div>
                    {(locked + amount) / 100} INR
                </div>
            </div>



        </div>
    </Card>
}