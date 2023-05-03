import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Box, Button, CircularProgress } from "@mui/material";

function QuotePage({ config }) {
  let { quote } = useParams();
  console.log(config);
  let selected = config.find((quoteConfig) => quoteConfig.name === quote);

  if (!selected) {
    return <div>Could not find config! Maybe I just redirect somewhere...</div>;
  }

  return <QuoteFactory config={selected} />;
}

function QuoteFactory({ config }) {
  const [isLoading, setIsLoading] = useState(true);
  const [quote, setQuote] = useState({});

  async function fetchQuote() {
    setIsLoading(true);
    const url = config.buildCustomUrl();
    let response = await fetch(url);
    response = await response.json();
    setQuote(config.customize(response));
    setIsLoading(false);
  }

  useEffect(() => {
    fetchQuote();
  }, []);

  function RenderQuote() {
    if (quote.anime) {
      return (
        <div>
          {quote.quote} -<b>{quote.author}</b> from {quote.anime}
        </div>
      );
    }
    return (
      <div>
        {quote.quote} {WriteAuthor()}
      </div>
    );
  }

  function WriteQuote() {
    if (isLoading) {
      return <CircularProgress />;
    }
    return (
      <>
        {RenderQuote()}
        <Button onClick={fetchQuote} variant="outlined">
          New Quote
        </Button>
      </>
    );
  }

  function WriteAuthor() {
    if (!quote.author) {
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
    <Box
      display="flex"
      alignItems="center"
      flexDirection="column"
      gap="16px"
      mt="100px"
    >
      <Box display="flex" alignItems="center" flexDirection="column" gap="16px">
        <WriteQuote />
      </Box>
    </Box>
  );
}

export default QuotePage;
