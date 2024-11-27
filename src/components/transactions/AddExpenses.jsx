import React, { useState } from "react";
import { Box, Typography, TextField, Select, MenuItem, Button } from "@mui/material";

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
    <Box
      sx={{
        mt: 4,
        p: 3,
        // Semi-transparent white for glass effect
        backdropFilter: "blur(10px)", // Frosted-glass effect
        WebkitBackdropFilter: "blur(10px)", // Safari compatibility
        borderRadius: 3,
        border: "1px solid rgba(255, 255, 255, 0.3)", // Subtle border
        boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)", // Slight shadow for depth
      }}
    >
      <Typography variant="h6" textAlign="center" gutterBottom>
        Add Transaction
      </Typography>
      <form onSubmit={handleAddTransaction}>
        {/* Description Field */}
        <TextField
          fullWidth
          label="Description"
          value={newTransaction.description}
          onChange={(e) =>
            setNewTransaction({ ...newTransaction, description: e.target.value })
          }
          sx={{ mb: 2 }}
          required
        />

        {/* Amount Field */}
        <TextField
          fullWidth
          label="Amount"
          type="number"
          value={newTransaction.amount}
          onChange={(e) =>
            setNewTransaction({ ...newTransaction, amount: e.target.value })
          }
          sx={{ mb: 2 }}
          required
        />

        {/* Type Selector */}
        <Select
          fullWidth
          value={newTransaction.type}
          onChange={(e) =>
            setNewTransaction({ ...newTransaction, type: e.target.value })
          }
          sx={{ mb: 2 }}
        >
          <MenuItem value="income">Income</MenuItem>
          <MenuItem value="expense">Expense</MenuItem>
        </Select>

        {/* Submit Button */}
        <Button
          type="submit"
          variant="contained"
          color="success"
          fullWidth
        >
          Add Transaction
        </Button>
      </form>
    </Box>
  );
}

export default AddExpenses;
