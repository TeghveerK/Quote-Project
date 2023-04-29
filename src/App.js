import { Outlet } from "react-router-dom";
import NavBar from "./components/Layout/NavBar";
import { Container } from "@mui/material";

function App() {
  return (
    <>
      <NavBar />
      <Container>
        <Outlet />
      </Container>
    </>
  );
}

export default App;
