import { Box } from "@mui/material";
import React from "react";
import MoneyHeistQuotes from "../Quote APIs/MoneyHeistQuotes";

function MoneyHeistPage() {
  return (
    <Box
      display="flex"
      alignItems="center"
      mt="100px"
      flexDirection="column"
      gap="16px"
    >
      <MoneyHeistQuotes />
    </Box>
  );
}

export default MoneyHeistPage;
