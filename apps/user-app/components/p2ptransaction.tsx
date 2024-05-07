"use client"
import { useState } from 'react';
import { toast } from "react-hot-toast";
import { sendmoney } from '../lib/actions/sendmoney';

const P2Ptransactioncard: React.FC = () => {
    const [amount, setAmount] = useState<number>(0);
    const [email, setEmail] = useState<string>('');
    const handleAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setAmount(Number(e.target.value));
    };

    const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value);
    };

    const handleAddMoney = async () => {
        try {
            if (!email || !amount) {
                toast.error('Email and amount fields cannot be empty');
                return;
            }

            toast.promise(sendmoney(email, amount*100), {
                loading: 'Sending money...',
                success: (res) => {
                    console.log(res)
                    if (res.success) {
                        window.location.href='http://localhost:3001/p2pTransaction'
                        return 'Money sent successfully';
                    } else {
                        throw new Error(res.message);
                    }
                },
                error: (error) => {
                    return `Error: ${error.message}`;
                }
            });
        } catch (error) {
            toast.error('Error when sending money');
            console.error(error);
        }
    };

    return (
        <div className="w-96 mx-auto mt-8 p-6 bg-purple-300 rounded-lg shadow-md">
            <h2 className="text-lg font-bold mb-4 text-black text-center">Send Money</h2>
            <div>
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="Email">
                    Account Email
                </label>
                <input
                    className="w-full bg-white text-black px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-indigo-500"
                    type="text"
                    id="email"
                    placeholder="Enter email"
                    onChange={handleEmailChange}
                />
            </div>

            <div>
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="amount">
                    Amount
                </label>
                <input
                    className="w-full bg-white text-black px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-indigo-500"
                    type="number"
                    id="amount"
                    placeholder="Enter amount"
                    onChange={handleAmountChange}
                />
            </div>

            <div className="mt-6">
                <button
                    className="w-full bg-purple-700 text-white py-2 px-4 rounded hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
                    onClick={handleAddMoney}
                >
                    Send Money
                </button>
            </div>
        </div>
    );
};

export default P2Ptransactioncard;
