import { Box, Button, Container, Paper, TextField } from "@mui/material";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import validate from "validate.js";

const constraints = {
  email: {
    email: {
      message: "doesn't look like a valid email!",
    },
  },
  password: { length: { minimum: 4, maximum: 20 } },
};

function LoginForm(props) {
  const [enteredEmail, setEnteredEmail] = useState("");
  const [enteredPassword, setEnteredPassword] = useState("");
  const [validation, setValidation] = useState({});

  const validateAndLogin = (event) => {
    const validationObj = validate(
      { email: enteredEmail, password: enteredPassword },
      constraints
    );

    if (!validationObj) {
      setValidation({});
      return;
    }

    setValidation(validationObj);
  };

  return (
    <Box display="flex" justifyContent="center" flexDirection="column">
      <Container sx={{ display: "flex", justifyContent: "center" }}>
        <Box
          flexDirection="column"
          display="flex"
          sx={{ mt: "100px", maxHeight: "800px", maxWidth: "800px" }}
        >
          <Paper
            elevation={3}
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: "100%",
              padding: "16px",
              width: "400px",
            }}
          >
            <Box flexDirection="column" display="flex" gap="24px" width="360px">
              <h1>Login</h1>
              <TextField
                type="email"
                id="email"
                label="Email"
                variant="outlined"
                required
                value={enteredEmail}
                onChange={(event) => {
                  setEnteredEmail(event.target.value);
                }}
                error={Boolean(validation.email)}
                helperText={validation.email && validation.email[0]}
              />
              <TextField
                type="password"
                id="password"
                label="Password"
                variant="outlined"
                required
                value={enteredPassword}
                onChange={(event) => setEnteredPassword(event.target.value)}
                error={Boolean(validation.password)}
                helperText={validation.password && validation.password[0]}
              />
              {/* <Link to="/home"> */}
              <Button variant="contained" onClick={validateAndLogin}>
                Login
              </Button>
              {/* </Link> */}
              <Link to="/register">
                <Button variant="outlined">Register Here</Button>
              </Link>
            </Box>
          </Paper>
        </Box>
      </Container>
    </Box>
  );
}

export default LoginForm;
