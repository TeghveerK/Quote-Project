import { Box, Button, CircularProgress } from "@mui/material";
import React, { useEffect, useState } from "react";

function BreakingBadQuotes() {
  const [isLoading, setIsLoading] = useState(true);
  const [quote, setQuote] = useState({});

  function handleResponse(response) {
    setIsLoading(false);
    setQuote(response);
    console.log(response);
  }

  function fetchQuote() {
    setIsLoading(true);
    fetch("https://api.breakingbadquotes.xyz/v1/quotes")
      .then((response) => response.json())
      .then(handleResponse);
  }

  useEffect(() => {
    fetchQuote();
  }, []);

  if (isLoading) {
    return <CircularProgress />;
  }

  return (
    <Box display="flex" alignItems="center" flexDirection="column" gap="16px">
      <div>
        {quote[0].quote} -<b>{quote[0].author}</b>
      </div>
      <Button onClick={fetchQuote} variant="outlined">
        New Quote
      </Button>
    </Box>
  );
}

export default BreakingBadQuotes;
