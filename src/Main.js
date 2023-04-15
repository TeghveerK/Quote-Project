import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Form from "./components/Form";
import LandingPage from "./components/Home";
import Redirect from "./components/Redirect";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import React from "react";
import App from "./App";
import Homepage from "./components/Homepage";

const router = createBrowserRouter([
  {
    path: "",
    element: <App />,
    children: [
      { path: "/", element: <Homepage /> },
      { path: "/login", element: <Form type="login" /> },
      { path: "/register", element: <Form type="register" /> },
      { path: "/redirect", element: <Redirect /> },
      { path: "/home", element: <LandingPage /> },
    ],
  },
]);

function Main() {
  return <RouterProvider router={router} />;
}

export default Main;
