import React from "react";

import "./vendor/normalize.css";
import "./vendor/stylesheet.css";
import "./app.css";
import "./components/button/button.css";

import { Header } from "./components/header/Header";
import { Title } from "./components/title/Title";
import { Babel } from "./components/babel/Babel";
import { Advertising } from "./components/advertising/Advertising";
import { Analytics } from "./components/analytics/Analytics";
import { Stock } from "./components/stock/Stock";
import { Footer } from "./components/footer/Footer";

export const App = () => (
  <div id="body">
    <Header />
    <Title />
    <Babel />
    <Advertising />
    <Analytics />
    <Stock />
    <Footer />
  </div>
);
