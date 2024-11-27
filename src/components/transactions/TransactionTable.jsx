import React from "react";
import {
  Table,
  TableContainer,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Paper,
  Button,
} from "@mui/material";

const TransactionTable = ({ transactions, onEdit, onDelete }) => (
  <TableContainer
    component={Paper}
    sx={{
      maxHeight: 380, 
      overflowY: "auto", 
      borderRadius: 2, 
      backgroundColor: "rgba(255, 255, 255, 0.6)", 
      backdropFilter: "blur(100px)",
      WebkitBackdropFilter: "blur(100px)", 
      boxShadow: 3,
      border: "1px solid rgba(255, 255, 255, 0.3)", 
    }}
  >
    <Table stickyHeader>
      <TableHead>
        <TableRow>
          <TableCell sx={{ fontWeight: "bold" }}>Name</TableCell>
          <TableCell sx={{ fontWeight: "bold" }}>Amount</TableCell>
          <TableCell sx={{ fontWeight: "bold" }}>Type</TableCell>
          <TableCell align="right" sx={{ fontWeight: "bold" }}>
            Actions
          </TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {transactions.map((transaction) => (
          <TableRow
            key={transaction.id}
            sx={{
              "&:nth-of-type(odd)": { backgroundColor: "action.hover" },
              "&:hover": { backgroundColor: "grey.100" },
            }}
          >
            <TableCell>{transaction.description}</TableCell>
            <TableCell>Rs {transaction.amount}</TableCell>
            <TableCell
              sx={{
                color: transaction.type === "Income" ? "green" : "red",
              }}
            >
              {transaction.type}
            </TableCell>
            <TableCell align="right">
              <Button
                variant="text"
                color="primary"
                onClick={() => onEdit(transaction)}
              >
                Edit
              </Button>
              <Button
                variant="text"
                color="error"
                onClick={() => onDelete(transaction.id)}
              >
                Delete
              </Button>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  </TableContainer>
);

export default TransactionTable;
