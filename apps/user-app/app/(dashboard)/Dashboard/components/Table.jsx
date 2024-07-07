
const TransactionsTable = ({transactions}) => {



  const getStatusColor = (status) => {
    switch (status) {
      case 'processing':
        return 'text-yellow-500';
      case 'failed':
        return 'text-red-500';
      case 'success':
        return 'text-green-500';
      default:
        return '';
    }
  };

  return (
    <div className="overflow-x-auto">
      <table className="max-w-6xl bg-white border border-gray-200 rounded-lg shadow-md">
        <thead>
          <tr>
            <th className="px-4 py-2 border-b-2 border-gray-200 bg-gray-50 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
              Time
            </th>
            <th className="px-4 py-2 border-b-2 border-gray-200 bg-gray-50 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
              Amount
            </th>
            <th className="px-4 py-2 border-b-2 border-gray-200 bg-gray-50 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
              Status
            </th>
            <th className="px-4 py-2 border-b-2 border-gray-200 bg-gray-50 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
              bank
            </th>
          </tr>
        </thead>
        <tbody>
          {transactions.map((transaction, index) => (
            <tr key={index}>
              <td className="px-4 py-2 border-b border-gray-200 text-sm">
                {new Date(transaction.time).toLocaleString()}
              </td>
              <td className="px-4 py-2 border-b border-gray-200 text-sm">
                ${transaction.amount.toFixed(2)}
              </td>
              <td className={`px-4 py-2 border-b border-gray-200 text-sm ${getStatusColor(transaction.status)}`}>
                {transaction.status.charAt(0).toUpperCase() + transaction.status.slice(1)}
              </td>
              <td className="px-4 py-2 border-b border-gray-200 text-sm">
                {transaction.provider}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TransactionsTable;
