import React from "react";
import { Card, CardContent, Typography } from "@mui/material";

const SummaryCard = ({ title, amount }) => (
  <Card 
  sx={{
    backgroundColor: "rgb(144, 243, 152)", // Transparent white
    backdropFilter: "blur(10px)", // Blurring effect
    WebkitBackdropFilter: "blur(10px)", // Safari compatibility
    borderRadius: 3, // Rounded corners
    border: "1px solid rgba(255, 255, 255, 0.3)", // Subtle border
    boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)", // Slight shadow
  }}
 >
    <CardContent  sx={{
    backgroundColor: "rgba(255, 255, 255, 0.6)", // Transparent white
    backdropFilter: "blur(100px)", // Blurring effect
    WebkitBackdropFilter: "blur(10px)", // Safari compatibility
    borderRadius: 3, // Rounded corners
    border: "1px solid rgba(255, 255, 255, 0.3)", // Subtle border
    boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)", // Slight shadow
  }}>
      <Typography variant="h5" color="primary" gutterBottom>
        {title}
      </Typography>
      <Typography variant="h6">Rs {amount}</Typography>
    </CardContent>
  </Card>
);

export default SummaryCard;
