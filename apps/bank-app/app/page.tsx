"use client"

import React from 'react';

const BankingPage = () => {
    const handleSubmit = (e) => {
        e.preventDefault();
        // You can implement logic to handle the form submission here
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-purple-300">
            <div className="max-w-4xl mx-auto bg-white p-8 rounded shadow-md flex">
                <div className="w-1/2 pr-8">
                    <h2 className="text-2xl font-bold mb-4">Welcome to Our Bank</h2>
                    <p className="text-gray-600 mb-6">We're glad you're here! Please complete your transaction by entering your account number and the amount you'd like to transfer.</p>
                    <p className="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi.</p>
                </div>
                <div className="w-1/2 pl-8">
                    <h2 className="text-2xl font-bold mb-4">Complete Your Transaction</h2>
                    <form onSubmit={handleSubmit}>
                        <div className="mb-4">
                            <label htmlFor="accountNumber" className="block text-gray-700 font-bold mb-2">Account Number</label>
                            <input type="text" id="accountNumber" className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-indigo-500" />
                        </div>
                        <div className="mb-6">
                            <label htmlFor="amount" className="block text-gray-700 font-bold mb-2">Amount</label>
                            <input type="number" id="amount" className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-indigo-500" />
                        </div>
                        <button type="submit" className="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 focus:outline-none focus:bg-blue-600">Submit</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default BankingPage;
