import { Box, Button, CircularProgress } from "@mui/material";
import React, { useEffect, useState } from "react";

function randomInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function DesignQuotes() {
  const [isLoading, setIsLoading] = useState(true);
  const [quote, setQuote] = useState({});

  function handleResponse(response) {
    setIsLoading(false);
    setQuote(response);
  }

  function fetchQuote() {
    setIsLoading(true);
    return fetch(
      `https://quotesondesign.com/wp-json/wp/v2/posts/?orderby=rand&_=${randomInteger(
        1,
        100000
      )}`
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
    <Box display="flex" alignItems="center" flexDirection="column">
      <div
        dangerouslySetInnerHTML={{ __html: quote[0].content.rendered }}
      ></div>
      <div>
        -<b>{quote[0].title.rendered}</b>
      </div>
      <Button
        onClick={fetchQuote}
        variant="outlined"
        sx={{ marginTop: "16px" }}
      >
        New Quote
      </Button>
    </Box>
  );
}

export default DesignQuotes;
