import { Box, Button, Paper, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

function Redirect() {
  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      flexDirection="column"
      marginTop="100px"
    >
      <Paper
        sx={{
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
          gap: "16px",
          padding: "16px",
        }}
      >
        <Typography variant="h3">Thanks for registering!</Typography>
        <Link to="/">
          <Button variant="outlined">Redirect</Button>
        </Link>
      </Paper>
    </Box>
  );
}

export default Redirect;
