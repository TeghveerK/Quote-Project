import { Box, Button, Container, Paper, TextField } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

function Form(props) {
  const isLogin = () => {
    return props.type === "login";
  };

  const FormHeader = () => {
    return <h1>{isLogin() ? "Login" : "Register"}</h1>;
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
            }}
          >
            <Box flexDirection="column" display="flex" gap="24px">
              <FormHeader />
              <TextField
                type="email"
                id="email"
                label="Email"
                variant="outlined"
                required
              />
              <TextField
                type="password"
                id="password"
                label="Password"
                variant="outlined"
                required
              />
              <Link to={isLogin() ? "/home" : "/redirect"}>
                <Button variant="contained">
                  {isLogin() ? "Login" : "Register"}
                </Button>
              </Link>
              <Link to={isLogin() ? "/register" : "/login"}>
                <Button variant="outlined">
                  {isLogin() ? "Register Here" : "Login Here"}
                </Button>
              </Link>
            </Box>
          </Paper>
        </Box>
      </Container>
    </Box>
  );
}

export default Form;
