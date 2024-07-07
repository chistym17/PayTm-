import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import './styles.css'
import  CreditCard from './Creditcard'
const RightSidebar = ({ user }) => {
  return (
    <aside className="w-1/5 fixed top-0 right-0 h-full bg-gray-100 shadow-lg">
      <section className="flex flex-col pb-8">
        <div className="profile-banner h-24 bg-blue-500" />
        <div className="profile flex items-center mt-4 p-4">
          <div className="profile-img flex items-center justify-center w-16 h-16 bg-white rounded-full border-2 border-blue-500">
            <span className="text-3xl font-bold text-blue-500">{user.name[0]}</span>
          </div>
          <div className="profile-details ml-4">
            <h1 className="text-xl font-semibold text-gray-800">
              {user.name}
            </h1>
            <p className="text-gray-600">
              {user.email}
            </p>
          </div>
        </div>
      </section>

      <section className="banks mt-8 p-4">
        <div className="flex w-full justify-between items-center">
     
        </div>

       <CreditCard cardNumber={11100000111111} cardHolder={'chisty'} ></CreditCard>
      </section>
    </aside>
  );
};

export default RightSidebar;
