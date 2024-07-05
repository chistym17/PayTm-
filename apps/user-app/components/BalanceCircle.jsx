'use client';
import React from 'react';
import './BalanceCircle.css';

const BalanceCircle = ({ balance }) => {
  const getBorderColor = () => (
    balance === 0 ? 'border-red-500' :
    balance < 1000 ? 'border-yellow-500' :
    'border-green-500'
  );

  const borderColor = getBorderColor();

  return (
    <div className="p-4 bg-purple-300 shadow-lg rounded-lg max-w-xs mx-auto">
      <div className="text-center mb-4">
        <h2 className="text-xl font-bold">Current Balance</h2>
        <p className="text-gray-600">Track your account balance</p>
      </div>
      <div className="balance-circle-container">
        <div className={`balance-circle ${borderColor}`}>
          <span className="text-2xl font-semibold">{balance}</span>
        </div>
        {balance === 0 && (
          <div className="balance-message mt-4">
            Please add credits
          </div>
        )}
      </div>
      <div className="mt-4 text-center">
        <p className="text-gray-600">Manage your finances efficiently</p>
        <p className="text-gray-600">Keep track of your transactions</p>
      </div>
    </div>
  );
};

export default BalanceCircle;
