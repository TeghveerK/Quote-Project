import { Box, Button, CircularProgress } from "@mui/material";
import React, { useEffect, useState } from "react";

function DarkQuotes() {
  const [isLoading, setIsLoading] = useState(true);
  const [quote, setQuote] = useState({});

  function handleResponse(response) {
    setIsLoading(false);
    setQuote(response[0]);
  }

  function fetchQuote() {
    setIsLoading(true);
    fetch("https://web-series-quotes-api.deta.dev/quote/?series=dark&count=1")
      .then((response) => response.json())
      .then(handleResponse);
  }

  useEffect(() => {
    fetchQuote();
  }, []);

  if (isLoading) {
    return <CircularProgress />;
  }

  function noAuthor() {
    if (quote.author === "") {
      return "";
    }
    return (
      <React.Fragment>
        <span>-</span>
        <b>{quote.author}</b>
      </React.Fragment>
    );
  }

  return (
    <Box display="flex" alignItems="center" flexDirection="column" gap="16px">
      <div>
        {quote.quote} {noAuthor()}
      </div>
      <Button onClick={fetchQuote} variant="outlined">
        New Quote
      </Button>
    </Box>
  );
}

export default DarkQuotes;
