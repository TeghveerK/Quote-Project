import { Box, Button, CircularProgress } from "@mui/material";
import React, { useEffect, useState } from "react";

function AnimeQuotes() {
  const [isLoading, setIsLoading] = useState(true);
  const [quote, setQuote] = useState({});

  const handleResponseFinish = (response) => {
    setQuote(response);
    setIsLoading(false);
  };

  function fetchQuote() {
    setIsLoading(true);
    fetch("https://animechan.vercel.app/api/random")
      .then((response) => response.json())
      .then(handleResponseFinish);
  }

  useEffect(() => {
    fetchQuote();
  }, []);

  if (isLoading) {
    return <CircularProgress />;
  }

  return (
    <Box>
      {quote.quote} -<b>{quote.character}</b> from {quote.anime}
      <Box display="flex" justifyContent="center" paddingTop="16px">
        <Button onClick={fetchQuote} variant="outlined">
          New Quote
        </Button>
      </Box>
    </Box>
  );
}

export default AnimeQuotes;
