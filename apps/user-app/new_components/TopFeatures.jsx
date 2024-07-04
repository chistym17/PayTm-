import React from 'react';
import FeatureCard from './Cards';

const features = [
  {
    title: 'Sign Up and Create Wallet',
    
    imgSrc: 'https://i.ibb.co/fFFVdHm/wallet-02.jpg' 
  },
  {
    title: 'Transfer Money from  Bank',
    
    imgSrc: 'https://i.ibb.co/pJvhfdz/63-Z-2112-w012-n001-19-C-p6-19.jpg'
  },
  {
    title: 'Send Money to Someone',
  
    imgSrc: 'https://i.ibb.co/RNnQBr9/na-january-14.jpg'
  },
  {
    title: 'Track Your Expenses',
   
    imgSrc: 'https://i.ibb.co/C1BPBqG/4136942.jpg' 
  }
];

const TopFeatures = () => {
  return (
    <div className="max-w-6xl mx-auto py-12  sm:px-6 lg:px-8 mt-10">
      <h2 className="text-center text-4xl leading-8 font-bold tracking-tight text-gray-900 sm:text-4xl mt-10">
        Our <span className='text-gradient font-bold '>Features</span>
      </h2>
      <div className=" flex flex-wrap items-center justify-center h-[400px]">
        {features.map((feature, index) => (
          <FeatureCard
            key={index}
            title={feature.title}
            imgSrc={feature.imgSrc}
          />
        ))}
      </div>
    </div>
  );
};

export default TopFeatures;
