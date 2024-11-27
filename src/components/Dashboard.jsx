import React, { useState, useEffect } from "react";
import { Box, Grid, Paper, Typography } from "@mui/material";
import SummaryCard from "./dashboard/SummaryCard";
import TransactionTable from "./transactions/TransactionTable";
import EditTransactionForm from "./transactions/EditTransactionForm";
import ChartContainer from "./dashboard/ChartContainer";
import AddExpenses from "./transactions/AddExpenses";
import NavbarAfter from "./dashboard/NavbarAfter";
import Footer from "./landingpage/Footer";

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
          p: 4,
          mt: 8,
          backgroundColor: "linear-gradient(135deg, #e0f7fa 30%, #80deea 90%)",
          borderRadius: 3,
        }}
      >
        <Typography variant="h4" gutterBottom textAlign="center" sx={{ color: "#004d40", fontWeight: "bold", mb:3, }}>
          Dashboard Overview 
        </Typography>

        <Grid container spacing={3}>
          <Grid item xs={12} sm={4}>
            <SummaryCard
              title="Total Income"
              amount={totalIncome}
              sx={{
                backgroundColor: "#b2dfdb",
                color: "#004d40",
                boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.2)",
              }}
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <SummaryCard
              title="Total Expenses"
              amount={totalExpenses}
              sx={{
                backgroundColor: "#ffab91",
                color: "#bf360c",
                boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.2)",
              }}
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <SummaryCard
              title="Balance"
              amount={totalIncome - totalExpenses}
              sx={{
                backgroundColor: "#80cbc4",
                color: "#004d40",
                boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.2)",
              }}
            />
          </Grid>
        </Grid>

        <Grid container spacing={3} sx={{ mt: 4 }}>
          <Grid item xs={12} md={6}>
            <Paper elevation={3} sx={{ backgroundColor: "#e3f2fd" }}>
              <ChartContainer totalIncome={totalIncome} totalExpenses={totalExpenses} />
            </Paper>
          </Grid>
          <Grid item xs={12} md={6}>
            <Paper elevation={3} sx={{ backgroundColor: "rgba(255,255,255,0.533)" }}>
              <TransactionTable
                transactions={transactions}
                onEdit={setEditTransaction}
                onDelete={handleDeleteTransaction}
              />
            </Paper>
          </Grid>
        </Grid>

        <Box sx={{ mt: 4 }}>
          <Paper
            elevation={4}
            sx={{
              borderRadius: 3,
              backgroundColor: "#e8f5e9",
              boxShadow: "0px 6px 10px rgba(0, 0, 0, 0.1)",
            }}
          >
            <AddExpenses onAddTransaction={handleAddTransaction} />
          </Paper>
        </Box>

        {editTransaction && (
          <Paper
            elevation={4}
            sx={{
              mt: 4,
              borderRadius: 3,
              backgroundColor: "rgb(227, 242, 253)",
              boxShadow: "0px 6px 12px rgba(0, 0, 0, 0.1)",
            }}
          >
            <EditTransactionForm
              transaction={editTransaction}
              setTransaction={setEditTransaction}
              onSave={handleSaveUpdate}
              onCancel={() => setEditTransaction(null)}
            />
          </Paper>
        )}
      </Box>

      <Footer />
    </>
  );
}

export default Dashboard;
