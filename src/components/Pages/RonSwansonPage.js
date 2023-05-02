import React from "react";
import RonSwansonQuotes from "../Quote APIs/RonSwansonQuotes";
import { Box } from "@mui/material";

function RonSwansonPage() {
  return (
    <Box
      display="flex"
      alignItems="center"
      mt="100px"
      flexDirection="column"
      gap="16px"
    >
      <RonSwansonQuotes />
    </Box>
  );
}

export default RonSwansonPage;
