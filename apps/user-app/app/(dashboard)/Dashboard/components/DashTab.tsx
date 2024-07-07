"use client"
import React, { useState } from 'react';
import { OnRampTransactions } from '../../../../components/OnRampTransactions';
import { ShowP2P } from '../../../../components/showp2ptransaction';
import { Showreceived } from './Showreceived';
import TransactionsTable from './Table'
const DashTab = ({  transactionsData,p2pdata,received }) => {

    console.log( transactionsData)
    const [activeTab, setActiveTab] = useState('transactions');

  
    return (
        <div className=" w-full">
         
            <div className="">
                <div className="flex space-x-4 items-center justify-center">
                    
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
                
                    {activeTab === 'transactions' &&
                        <TransactionsTable transactions={transactionsData} />


                    }
                     {activeTab === 'receive' &&
                     <TransactionsTable transactions={received}/>

                    }
                     {activeTab === 'sent' &&

                         <TransactionsTable transactions={p2pdata}/>
                    }
                </div>
            </div>
        </div>
    );
};

export default DashTab;
