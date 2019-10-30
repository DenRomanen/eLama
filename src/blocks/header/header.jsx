import React from "react";

import "./header.css";

export const Header = () => (
  <section className="header">
    <div className="header__body">
      <a href="https://elama.ru/tools/" className="header__logo" />
      <div className="header__links">
        <a href="#" className="header__links-text">
          С чего начать
        </a>
        <a href="#" className="header__links-text">
          Инструменты
        </a>
        <a href="#" className="header__links-text">
          Услуги
        </a>
      </div>
      <button className="header__button">Вход</button>
    </div>
  </section>
);
