import React from "react";
import { Card, CardContent, Typography } from "@mui/material";

const SummaryCard = ({ title, amount }) => (
  <Card>
    <CardContent>
      <Typography variant="h5" color="primary" gutterBottom>
        {title}
      </Typography>
      <Typography variant="h6">${amount}</Typography>
    </CardContent>
  </Card>
);

export default SummaryCard;
