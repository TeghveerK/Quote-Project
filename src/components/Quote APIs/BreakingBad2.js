import { Box, Button, CircularProgress } from "@mui/material";
import React, { useEffect, useState } from "react";

function BreakingBad2() {
  const [isLoading, setIsLoading] = useState(true);
  const [quote, setQuote] = useState({});

  function handleResponse(response) {
    setIsLoading(false);
    setQuote(response);
  }

  function fetchQuote() {
    setIsLoading(true);
    fetch(
      "https://web-series-quotes-api.deta.dev/quote/?series=breaking_bad&count=1"
    )
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

export default BreakingBad2;
