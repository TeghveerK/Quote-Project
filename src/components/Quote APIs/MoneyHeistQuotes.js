import { Box, Button, CircularProgress } from "@mui/material";
import React, { useEffect, useState } from "react";

function MoneyHeistQuotes() {
  const [isLoading, setIsLoading] = useState(true);
  const [quote, setQuote] = useState({});

  function handleResponse(response) {
    setIsLoading(false);
    setQuote(response[0]);
  }

  async function fetchQuote() {
    let response = await fetch(
      "https://web-series-quotes-api.deta.dev/quote/?series=money_heist&count=1"
    );
    response = await response.json();
    handleResponse(response);
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
        {quote.quote} -<b>{quote.author}</b>
      </div>
      <Button onClick={fetchQuote} variant="outlined">
        New Quote
      </Button>
    </Box>
  );
}

export default MoneyHeistQuotes;
