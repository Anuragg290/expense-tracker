import React from "react";

function TransactionList({
  transactions,
  onDeleteTransaction,
  onEditTransaction,
}) {
  return (
    <div>
      <h2 className="text-2xl text-center mt-8 mb-4 font-semibold">Transactions</h2>
      <ul className="space-y-3">
        {transactions.map((transaction) => (
          <li
            key={transaction.id}
            className="flex justify-between items-center bg-blue-400 p-4 rounded-md"
          >
            <span className="text-lg">
              {transaction.description}: ${transaction.amount} (
              {transaction.type})
            </span>
            <div>
              <button
                onClick={() => onDeleteTransaction(transaction.id)}
                className="bg-gray-800 text-white px-3 py-1 rounded mr-2 hover:bg-gray-700 transition"
              >
                Delete
              </button>
              <button
                onClick={() => onEditTransaction(transaction)}
                className="bg-gray-800 text-white px-3 py-1 rounded hover:bg-gray-700 transition"
              >
                Update
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TransactionList;
