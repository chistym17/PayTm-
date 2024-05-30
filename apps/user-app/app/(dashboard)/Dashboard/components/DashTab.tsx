"use client"
import { useSession } from 'next-auth/react';
import React, { useState } from 'react';
import { BalanceCard } from '../../../../components/BalanceCard';
import { OnRampTransactions } from '../../../../components/OnRampTransactions';
import { ShowP2P } from '../../../../components/showp2ptransaction';
import { Showreceived } from './Showreceived';

const DashTab = ({ balanceData, transactionsData,p2pdata,received }) => {

    console.log(balanceData, transactionsData)
    const user = useSession()
    const [activeTab, setActiveTab] = useState('balance');

  
    return (
        <div className="p-8 w-full">
            <div>
                <h2 className="text-4xl mb-4 text-center font-semibold text-purple-500">Welcome, {user.data?.user.name}!</h2>
                <p className="text-lg mb-4 text-center text-blue-500">Email: {user.data?.user.email}</p>
            </div>
            <div className="mt-8">
                <div className="flex space-x-4 items-center justify-center">
                    <button
                        onClick={() => setActiveTab('balance')}
                        className={`py-2 px-4 ${activeTab === 'balance' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'} rounded-md`}
                    >
                        Balance
                    </button>
                    <button
                        onClick={() => setActiveTab('transactions')}
                        className={`py-2 px-4 ${activeTab === 'transactions' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'} rounded-md`}
                    >
                        Transactions
                    </button>

                    <button
                        onClick={() => setActiveTab('sent')}
                        className={`py-2 px-4 ${activeTab === 'sent' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'} rounded-md`}
                    >
                        Sent Money
                    </button>

                    <button
                        onClick={() => setActiveTab('receive')}
                        className={`py-2 px-4 ${activeTab === 'receive' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'} rounded-md`}
                    >
                        Received Money
                    </button>
                </div>
                <div className="mt-8">
                    {/* Render content based on active tab */}
                    {activeTab === 'balance' &&

                        <BalanceCard amount={balanceData.amount} locked={balanceData.locked} />

                    }
                    {activeTab === 'transactions' &&
                        <OnRampTransactions transactions={transactionsData} />


                    }
                     {activeTab === 'receive' &&
                     <Showreceived transactions={received}></Showreceived>

                    }
                     {activeTab === 'sent' &&

                         <ShowP2P transactions={p2pdata}></ShowP2P>
                    }
                </div>
            </div>
        </div>
    );
};

export default DashTab;
