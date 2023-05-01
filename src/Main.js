import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Form from "./components/Layout/Form";
import LandingPage from "./components/Layout/Home";
import Redirect from "./components/Redirect";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import React from "react";
import App from "./App";
import Homepage from "./components/Homepage";
import Inspiration from "./components/Pages/Inspiration";
import AnimePage from "./components/Pages/AnimePage";
import RandomPage from "./components/Pages/RandomPage";
import Kanye from "./components/Pages/Kanye";
import Programming from "./components/Pages/Programming";
import JamesClearPage from "./components/Pages/JamesClearPage";

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
      { path: "/inspiration", element: <Inspiration /> },
      { path: "/anime", element: <AnimePage /> },
      { path: "/random", element: <RandomPage /> },
      { path: "/kanye", element: <Kanye /> },
      { path: "/programming", element: <Programming /> },
      { path: "/jamesclear", element: <JamesClearPage /> },
    ],
  },
]);

function Main() {
  return <RouterProvider router={router} />;
}

export default Main;
