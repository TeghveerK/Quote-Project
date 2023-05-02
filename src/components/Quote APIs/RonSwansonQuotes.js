import { Box, Button, CircularProgress } from "@mui/material";
import React, { useEffect, useState } from "react";

function RonSwansonQuotes() {
  const [isLoading, setIsLoading] = useState(true);
  const [quote, setQuote] = useState({});

  function handleResponse(response) {
    setIsLoading(false);
    setQuote(response);
  }

  function fetchQuote() {
    setIsLoading(true);
    fetch("https://ron-swanson-quotes.herokuapp.com/v2/quotes")
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
        {quote[0]} -<b>Ron Swanson</b>
      </div>
      <Button onClick={fetchQuote} variant="outlined">
        New Quote
      </Button>
    </Box>
  );
}

export default RonSwansonQuotes;
