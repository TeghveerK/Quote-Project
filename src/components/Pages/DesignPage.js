import { Box } from "@mui/material";
import React from "react";
import DesignQuotes from "../Quote APIs/DesignQuotes";

function DesignPage() {
  return (
    <Box
      display="flex"
      alignItems="center"
      mt="100px"
      flexDirection="column"
      gap="16px"
    >
      <DesignQuotes />
    </Box>
  );
}

export default DesignPage;
