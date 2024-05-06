import { BalanceCard } from "../../../components/BalanceCard";
import P2Ptransactioncard from "../../../components/p2ptransaction";
import { ShowP2P } from "../../../components/showp2ptransaction";
import getp2ptransactions from "../../../lib/actions/getp2ptransactions";
import { getBalance } from "../transfer/page";

const page = async () => {
    const balance = await getBalance();
    const data = await getp2ptransactions();


    return <div className="w-screen">
        <div className="text-4xl text-[#6a51a6] pt-8 mb-8 font-bold">
            Transfer
        </div>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 p-4">
            <div>
                <P2Ptransactioncard />
            </div>
            <div>
                <BalanceCard amount={balance.amount} locked={balance.locked} />
                <div className="pt-4">
                    <ShowP2P transactions={data}></ShowP2P>
                </div>
            </div>


        </div>
    </div>
}
export default page;