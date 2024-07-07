import React from 'react';
import './Paylink.css'; // Ensure to create this file for custom styles
import Bank from './Banktransfer'
import Wallet from './Transferwallet'
import Link from 'next/link';
import TextGenerateEffect from '../components/animations/Type'
const main = () => {
    return (
        <div className=" py-12  sm:px-6 lg:px-8 mt-14">
            <h2 className="text-center text-4xl leading-8 font-bold tracking-tight text-gray-900 sm:text-4xl mt-3">
                Complete a <span className='text-gradient font-bold' >transaction</span> in less than a minute with our app.
                {/* < TextGenerateEffect words={'Complete a in less than a minute with our app'}></TextGenerateEffect> */}
            </h2>
            <div className="text-center rounded-lg  mt-8 ">
                <Link href="/SignIn">
                    <button className="w-56 bg-custom text-white font-bold py-2 px-4 rounded-lg">
                        Sign Up For Free
                    </button>
                </Link>
            </div>
            <div className="">


                <Bank></Bank>

                <Wallet></Wallet>
            </div>
        </div>
    );
};

export default main;

