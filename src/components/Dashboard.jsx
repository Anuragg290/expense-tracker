import React, { useState, useEffect } from "react";
import { Box, Grid, Paper } from "@mui/material";
import SummaryCard from "./dashboard/SummaryCard";
import TransactionTable from "./transactions/TransactionTable";
import EditTransactionForm from "./transactions/EditTransactionForm";
import ChartContainer from "./dashboard/ChartContainer";
import AddExpenses from "./transactions/AddExpenses";
import NavbarAfter from "./dashboard/NavbarAfter";

function Dashboard() {
  const [transactions, setTransactions] = useState([]);
  const [totalIncome, setTotalIncome] = useState(0);
  const [totalExpenses, setTotalExpenses] = useState(0);
  const [editTransaction, setEditTransaction] = useState(null);

  useEffect(() => {
    fetchTransactions();
  }, []);

  const fetchTransactions = () => {
    fetch("http://localhost:5000/transactions")
      .then((response) => response.json())
      .then((data) => {
        setTransactions(data);
        calculateSummary(data);
      });
  };

  const calculateSummary = (data) => {
    const income = data
      .filter((transaction) => transaction.type === "income")
      .reduce((acc, transaction) => acc + transaction.amount, 0);
    const expenses = data
      .filter((transaction) => transaction.type === "expense")
      .reduce((acc, transaction) => acc + transaction.amount, 0);

    setTotalIncome(income);
    setTotalExpenses(expenses);
  };

  const handleAddTransaction = (newTransaction) => {
    fetch("http://localhost:5000/transactions", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newTransaction),
    })
      .then((response) => response.json())
      .then((data) => {
        const updatedTransactions = [...transactions, data];
        setTransactions(updatedTransactions);
        calculateSummary(updatedTransactions);
      });
  };

  const handleDeleteTransaction = (id) => {
    fetch(`http://localhost:5000/transactions/${id}`, { method: "DELETE" })
      .then(() => {
        const updatedTransactions = transactions.filter(
          (transaction) => transaction.id !== id
        );
        setTransactions(updatedTransactions);
        calculateSummary(updatedTransactions);
      });
  };

  const handleSaveUpdate = () => {
    fetch(`http://localhost:5000/transactions/${editTransaction.id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(editTransaction),
    })
      .then((response) => response.json())
      .then((data) => {
        const updatedTransactions = transactions.map((transaction) =>
          transaction.id === editTransaction.id ? data : transaction
        );
        setTransactions(updatedTransactions);
        calculateSummary(updatedTransactions);
        setEditTransaction(null);
      });
  };

  return (
    <>
      <NavbarAfter />
      <Box
        sx={{
          p: 3,
          mt: 10,
          backgroundColor: "#F8F7FF", // Lightest pink from the palette
          backdropFilter: "blur(10px)",
          WebkitBackdropFilter: "blur(10px)",
          boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.3)",
          borderRadius: 2,
          border: "1px solid rgba(255, 255, 255, 0.3)",
        }}
      >
        <Grid container spacing={3}>
          <Grid item xs={12} sm={4}>
            <SummaryCard
              title="Total Income"
              amount={totalIncome}
              sx={{
                backgroundColor: "#B8B8FF", // Lavender shade
                color: "black", // Dark text for contrast
              }}
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <SummaryCard
              title="Total Expenses"
              amount={totalExpenses}
              sx={{
                backgroundColor: "#141122", // Slightly darker lavender
                color: "white",
              }}
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <SummaryCard
              title="Balance"
              amount={totalIncome - totalExpenses}
              sx={{
                backgroundColor: "#B8B8FF", 
                color: "Black",
              }}
            />
          </Grid>
        </Grid>

        <Grid container spacing={3} sx={{ mt: 3 }}>
          <Grid item xs={12} md={6}>
            <Paper>
              <ChartContainer
                totalIncome={totalIncome}
                totalExpenses={totalExpenses}
              />
            </Paper>
          </Grid>
          <Grid item xs={12} md={6}>
            <Paper>
              <TransactionTable
                transactions={transactions}
                onEdit={setEditTransaction}
                onDelete={handleDeleteTransaction}
              />
            </Paper>
          </Grid>
        </Grid>

        <Box sx={{ mt: 3 }}>
          <Paper
            elevation={3}
            sx={{
              p: 2,
              borderRadius: 2,
              backgroundColor: "#F8F7FF", // Lavender
              backdropFilter: "blur(8px)",
              boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)",
            }}
          >
            <AddExpenses onAddTransaction={handleAddTransaction} />
          </Paper>
        </Box>

        {editTransaction && (
          <Box sx={{ mt: 3 }}>
            <Paper
              elevation={3}
              sx={{
                p: 2,
                borderRadius: 2,
                backgroundColor: "#F8F7FF", // Lightest pink for modal
                backdropFilter: "blur(10px)",
                boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)",
              }}
            >
              <EditTransactionForm
                transaction={editTransaction}
                setTransaction={setEditTransaction}
                onSave={handleSaveUpdate}
                onCancel={() => setEditTransaction(null)}
              />
            </Paper>
          </Box>
        )}
      </Box>
    </>
  );
}

export default Dashboard;
