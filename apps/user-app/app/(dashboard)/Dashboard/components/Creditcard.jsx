const CreditCard = ({ cardNumber, cardHolder }) => {
    return (
      <div className="w-full max-w-sm bg-blue-600 text-white rounded-lg shadow-lg p-6 relative overflow-hidden">
        <div className="flex justify-between items-center">
          <div>
            <h2 className="text-xl font-bold">Brac Bank</h2>
            <p className="text-sm">Credit Card</p>
          </div>
          <div className="w-12 h-12 flex items-center justify-center">
            <img src="  https://i.ibb.co/xGX9Kw8/crypto-wallet-8589852.png" alt="Chip" className="w-8 h-8" />
          </div>
        </div>
        <div className="mt-3">
          <h3 className="text-lg tracking-widest font-semibold">{cardNumber}</h3>
        </div>
        <div className="mt-3 flex justify-between items-center">
          <div>
            <p className="text-xs uppercase">Card Holder</p>
            <h4 className="text-md font-semibold">{cardHolder}</h4>
          </div>
         
        </div>
        <div className="mt-2 flex justify-end">
          <img src="https://i.ibb.co/b6c57vy/visa-196578.png" alt="Visa" className="w-16" />
        </div>
      </div>
    );
  };
  
  export default CreditCard;

