import React from "react";
import { Card, CardContent, Typography } from "@mui/material";
import Chart from "./Chart";

const ChartContainer = ({ totalIncome, totalExpenses }) => (
  <Card
    sx={{
      backgroundColor: "rgba(255, 255, 255, 0.2)", // Transparent white
      backdropFilter: "blur(10px)", // Blurring effect
      WebkitBackdropFilter: "blur(10px)", // Safari compatibility
      borderRadius: 3, // Rounded corners
      border: "1px solid rgba(255, 255, 255, 0.3)", // Subtle border
      boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)", // Slight shadow
    }}
  >
    <CardContent>
      <Typography variant="h6" gutterBottom>
        Income vs Expenses
      </Typography>
      <Chart totalIncome={totalIncome} totalExpenses={totalExpenses} />
    </CardContent>
  </Card>
);

export default ChartContainer;
