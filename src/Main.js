import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LandingPage from "./components/Layout/Home";
import Redirect from "./components/Redirect";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import React from "react";
import App from "./App";
import Homepage from "./components/Homepage";
import QuotePage from "./components/Pages/QuotePage";
import InspirationQuote from "./quote-configs/inspiration";
import AnimeQuote from "./quote-configs/anime";
import RandomQuote from "./quote-configs/random";
import KanyeQuote from "./quote-configs/kanye";
import ProgrammingQuote from "./quote-configs/programming";
import JamesClearQuote from "./quote-configs/jamesclear";
import DesignQuote from "./quote-configs/design";
import StoicismQuote from "./quote-configs/stoicism";
import BreakingBadQuote from "./quote-configs/breakingbad";
import GameOfThronesQuote from "./quote-configs/gameofthrones";
import LuciferQuote from "./quote-configs/lucifer";
import RonSwansonQuote from "./quote-configs/ronswanson";
import StrangerThingsQuote from "./quote-configs/strangerthings";
import DarkQuote from "./quote-configs/dark";
import MoneyHeistQuote from "./quote-configs/moneyheist";
import LoginForm from "./components/Layout/LoginForm";
import RegisterForm from "./components/Layout/RegisterForm";

let config = [];

config.push(new AnimeQuote());
config.push(new BreakingBadQuote());
config.push(new DarkQuote());
config.push(new DesignQuote());
config.push(new GameOfThronesQuote());
config.push(new InspirationQuote());
config.push(new JamesClearQuote());
config.push(new KanyeQuote());
config.push(new LuciferQuote());
config.push(new MoneyHeistQuote());
config.push(new ProgrammingQuote());
config.push(new RandomQuote());
config.push(new RonSwansonQuote());
config.push(new StoicismQuote());
config.push(new StrangerThingsQuote());

const router = createBrowserRouter([
  {
    path: "",
    element: <App />,
    children: [
      { path: "/", element: <Homepage config={config} /> },
      { path: "/redirect", element: <Redirect /> },
      { path: "/home", element: <LandingPage /> },
      { path: "/login", element: <LoginForm /> },
      { path: "/register", element: <RegisterForm /> },
      { path: "/:quote", element: <QuotePage config={config} /> },
    ],
  },
]);

function Main() {
  return <RouterProvider router={router} />;
}

export default Main;
