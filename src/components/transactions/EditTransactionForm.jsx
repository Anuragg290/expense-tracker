import React from "react";
import { Box, Typography, TextField, Select, MenuItem, Button } from "@mui/material";

const EditTransactionForm = ({
  transaction,
  setTransaction,
  onSave,
  onCancel,
}) => (
  <Box
    sx={{
      mt: 3,
      p: 3,
      backgroundColor: "rgba(255, 255, 255, 0.2)", // Semi-transparent white
      backdropFilter: "blur(10px)", // Frosted-glass effect
      borderRadius: 3, // Rounded corners
      border: "1px solid rgba(255, 255, 255, 0.3)", // Subtle border
      boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)", // Slight shadow for depth
    }}
  >
    <Typography variant="h6" gutterBottom>
      Edit Transaction
    </Typography>

    {/* Description Input */}
    <TextField
      fullWidth
      label="Description"
      value={transaction.description}
      onChange={(e) =>
        setTransaction({ ...transaction, description: e.target.value })
      }
      sx={{ mb: 2 }}
    />

    {/* Amount Input */}
    <TextField 
      fullWidth
      label="Amount"
      type="number"
      value={transaction.amount}
      onChange={(e) =>
        setTransaction({ ...transaction, amount: parseFloat(e.target.value) })
      }
      sx={{ mb: 2 }}
      
    />

    {/* Type Selector */}
    <Select
      fullWidth
      value={transaction.type}
      onChange={(e) => setTransaction({ ...transaction, type: e.target.value })}
      sx={{ mb: 2 }}
    >
      <MenuItem value="income">Income</MenuItem>
      <MenuItem value="expense">Expense</MenuItem>
    </Select>

    {/* Action Buttons */}
    <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
      <Button variant="contained" color="primary" onClick={onSave} sx={{ mr: 1 }}>
        Save
      </Button>
      <Button variant="contained" color="error" onClick={onCancel}>
        Cancel
      </Button>
    </Box>
  </Box>
);

export default EditTransactionForm;
