import { Alert, Box, Button, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import { Snackbar } from "@mui/material";

function Home() {
  const [showTextField, setShowTextField] = useState(false);
  const [showSnackbar, setShowSnackbar] = useState(false);

  function handleClick() {
    setShowTextField(!showTextField);
  }
  function handleSubmit() {
    setShowSnackbar(!showSnackbar);
  }

  return (
    <Box padding="16px">
      <Typography variant="h3">Welcome to your page!</Typography>
      <Box paddingTop="16px">
        <Typography variant="h5">Your Quotes</Typography>
        <Box paddingTop="16px">
          <Typography variant="subtitle">I yam what I yam.</Typography>
        </Box>
        <Button
          variant="outlined"
          onClick={handleClick}
          sx={{ marginTop: "16px", marginRight: "16px" }}
        >
          Write Your Own Quote
        </Button>
        {showTextField && (
          <Box
            display="flex"
            flexDirection="row"
            height="40px"
            width="400px"
            paddingTop="16px"
          >
            <TextField
              id="outlined-basic"
              label="Quote"
              variant="standard"
              sx={{ paddingRight: "16px" }}
            >
              Enter
            </TextField>
            <Button variant="contained" size="small" onClick={handleSubmit}>
              Submit Quote
            </Button>
            <Snackbar
              open={showSnackbar}
              onClose={handleSubmit}
              autoHideDuration={4000}
            >
              <Alert severity="success" sx={{ width: "100%" }}>
                Quote Saved!
              </Alert>
            </Snackbar>
          </Box>
        )}
      </Box>
    </Box>
  );
}

export default Home;
