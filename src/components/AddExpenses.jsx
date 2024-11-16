import React, { useState } from "react";

function AddExpenses({ onAddTransaction }) {
  const [newTransaction, setNewTransaction] = useState({
    description: "",
    amount: "",
    type: "income",
  });

  const handleAddTransaction = (e) => {
    e.preventDefault();
    onAddTransaction({
      ...newTransaction,
      amount: parseFloat(newTransaction.amount),
    });
    setNewTransaction({ description: "", amount: "", type: "income" });
  };

  return (
    <div>
      <h2 className="text-2xl text-center mt-8 mb-4 font-semibold">Add Transaction</h2>
      <form onSubmit={handleAddTransaction} className="mb-6">
        <input
          type="text"
          placeholder="Description"
          value={newTransaction.description}
          onChange={(e) =>
            setNewTransaction({ ...newTransaction, description: e.target.value })
          }
          className="w-full mb-3 p-2 rounded border border-gray-300"
          required
        />
        <input
          type="number"
          placeholder="Amount"
          value={newTransaction.amount}
          onChange={(e) =>
            setNewTransaction({ ...newTransaction, amount: e.target.value })
          }
          className="w-full mb-3 p-2 rounded border border-gray-300"
          required
        />
        <select
          value={newTransaction.type}
          onChange={(e) =>
            setNewTransaction({ ...newTransaction, type: e.target.value })
          }
          className="w-full mb-3 p-2 rounded border border-gray-300"
        >
          <option value="income">Income</option>
          <option value="expense">Expense</option>
        </select>
        <button
          type="submit"
          className="w-full bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition"
        >
          Add Transaction
        </button>
      </form>
    </div>
  );
}

export default AddExpenses;
