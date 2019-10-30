import React from "react";

import "./vendor/normalize.css";
import "./vendor/stylesheet.css";
import "./app.css";
import "./blocks/button/button_green.css";

import { Header } from "./blocks/header/header";
import { Title } from "./blocks/title/title";
import { Babel } from "./blocks/babel/babel";
import { Advertising } from "./blocks/advertising/advertising";
import { Analytics } from "./blocks/analytics/analytics";
import { Stock } from "./blocks/stock/stock";
import { Footer } from "./blocks/footer/footer";

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
