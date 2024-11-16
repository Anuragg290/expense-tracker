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
      bgcolor: "background.paper",
      borderRadius: 2,
      boxShadow: 3,
    }}
  >
    <Typography variant="h6" gutterBottom>
      Edit Transaction
    </Typography>
    <TextField
      fullWidth
      label="Description"
      value={transaction.description}
      onChange={(e) =>
        setTransaction({ ...transaction, description: e.target.value })
      }
      sx={{ mb: 2 }}
    />
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
    <Select
      fullWidth
      value={transaction.type}
      onChange={(e) => setTransaction({ ...transaction, type: e.target.value })}
      sx={{ mb: 2 }}
    >
      <MenuItem value="income">Income</MenuItem>
      <MenuItem value="expense">Expense</MenuItem>
    </Select>
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
