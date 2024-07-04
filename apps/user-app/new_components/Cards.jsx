import React from 'react';
import './Paylink.css'; // Ensure to create this file for custom styles

const FeatureCard = ({ title, imgSrc }) => {
  return (
    <div className=" rounded-lg shadow-lg overflow-hidden w-72 m-4">
      <img className="w-full h-40 object-cover" src={imgSrc} alt={title} />
      <div className="p-6">
        <h3 className="text-lg font-bold mb-2 text-gray-600">{title}</h3>
      </div>
     
    </div>
  );
};

export default FeatureCard;
