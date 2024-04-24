"use client"
import React, { useState } from 'react';
import createtransactions from '../lib/actions/createtransactions';

const AddMoneyCard: React.FC = () => {
  const [amount, setAmount] = useState<number>(0);
  const [bankOption, setBankOption] = useState<string>('');

  const handleAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAmount(Number(e.target.value));
  };

  const handleBankChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setBankOption(e.target.value);
  };

  const handleAddMoney = async() => {
    console.log('Amount:', amount);
    console.log('Bank Option:', bankOption);
   const res= await createtransactions(bankOption,amount);
   console.log(res);
    setAmount(0)

  };

  return (
    <div className="w-96 mx-auto mt-8 p-6 bg-purple-300 rounded-lg shadow-md">
      <h2 className="text-lg font-bold mb-4 text-black text-center">Add Money</h2>
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
      <div className="mt-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="bankOption">
          Bank Option
        </label>
        <select
          className="w-full bg-white text-black px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-indigo-500"
          id="bankOption"
          value={bankOption}
          onChange={handleBankChange}
        >
          <option value="">Select Bank</option>
          <option value="brac">BRAC Bank</option>
          <option value="netbank">NetBank</option>
        </select>
      </div>
      <div className="mt-6">
        <button
          className="w-full bg-purple-700 text-white py-2 px-4 rounded hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
          onClick={handleAddMoney}
        >
          Add Money
        </button>
      </div>
    </div>
  );
};

export default AddMoneyCard;
