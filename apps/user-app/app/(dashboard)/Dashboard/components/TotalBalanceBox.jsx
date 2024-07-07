import React from 'react';
import './styles.css'
const TotalBalanceBox = ({ totalCurrentBalance }) => {
    return (
        <section className="total-balance mt-3">
            <div className="total-balance-chart">
                <div className="total-balance-amount text-center">
                    ${totalCurrentBalance}
                </div>
            </div>

            <div className="flex-col gap-6">
                <h2 className="header-2">
                    Bank Accounts: 1
                </h2>
                <div className="flex-col gap-2">
                    <p className="total-balance-label">
                        Total Current Balance:{totalCurrentBalance}
                    </p>
                </div>
            </div>
        </section>
    )
}

export default TotalBalanceBox;
