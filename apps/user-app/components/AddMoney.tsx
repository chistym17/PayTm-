"use client"
import { Select } from "@repo/ui/Select";
import { TextInput } from "@repo/ui/TextInput";
import { Button } from "@repo/ui/button";
import { Card } from "@repo/ui/card";
import { useState } from "react";

const SUPPORTED_BANKS = [{
    name: "Brac Bank",
    redirectUrl: "https://netbanking.hdfcbank.com"
}, {
    name: "Net Bank",
    redirectUrl: "https://www.axisbank.com/"
}];

export const AddMoney = () => {
    const [amount, setAmount] = useState<number>(0);
    const [selectedBank, setSelectedBank] = useState<string>(SUPPORTED_BANKS[0]?.name);

    const handleAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setAmount(Number(e.target.value));
    };

    const handleBankChange = (value: string) => {
        setSelectedBank(value);
    };

    const handleAddMoney = () => {
        const bank = SUPPORTED_BANKS.find(bank => bank.name === selectedBank);
        if (bank) {
            window.location.href = bank.redirectUrl;
        }
    };

    return (
        <div className="bg-purple-300 w-full h-full flex justify-center items-center">
            <Card title="Add Money" className="w-96">
                <div className="w-full p-4 text-black font-bold">
                    <TextInput
                        label="Amount"
                        placeholder="Enter amount"
                        type="number"
                        value={amount.toString()}
                        onChange={(e) => handleAmountChange(e)}
                    />
                    <div className="py-4 text-left font-bold text-black">Bank</div>
                    <Select
                        onSelect={(value) => handleBankChange(value)}
                        options={SUPPORTED_BANKS.map(bank => ({ key: bank.name, value: bank.name }))}
                    />
                    <div className="flex justify-center mt-6 text-black">
                        <Button onClick={handleAddMoney}>Add Money</Button>
                    </div>
                </div>
            </Card>
        </div>
    );
};
