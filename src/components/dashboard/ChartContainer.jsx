import React from "react";
import { Card, CardContent, Typography } from "@mui/material";
import Chart from "./Chart";

const ChartContainer = ({ totalIncome, totalExpenses }) => (
  <Card>
    <CardContent>
      <Typography variant="h6" gutterBottom>
        Income vs Expenses
      </Typography>
      <Chart totalIncome={totalIncome} totalExpenses={totalExpenses} />
    </CardContent>
  </Card>
);

export default ChartContainer;
