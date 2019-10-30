import React from "react";

import amg1 from "../../../images/Macbook-Pro-&-iMac-Mockup-Template34.png";
import "./analytics.css";

export const Analytics = () => (
  <section className="analytics">
    <img src={amg1} alt="Macbook-Pro" className="analytics__img" />
    <div className="analytics__container">
      <h2 className="analytics__container-title">
        Настроим системы веб&#8209;аналитики или доработаем текущие настройки
      </h2>
      <p className="analytics__container-text">
        Создадим цели, события и свяжем системы аналитики с рекламными
        системами, чтобы вы получали правильные данные
      </p>
      <div className="analytics__container-liks">
        <button className="universal-button">Заполнить бриф</button>
        <a href="" className="analytics__container-links_link">
          Получить консультацию
        </a>
      </div>
    </div>
  </section>
);
