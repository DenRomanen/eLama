import React from "react";

import "./stock.css";
import arrow from "../../../images/arrow.png";
import arrowLine from "../../../images/arrow2.png";

export const Stock = () => (
  <section className="stock">
    <div className="stock__body">
      <div className="stock__container">
        <h3 className="stock__container-title">
          Бесплатная стартовая кампания
        </h3>
        <button className="button-primary">Заполнить бриф</button>
      </div>
      <img src={arrow} alt="" className="stock__image-arrow" />
      <p className="stock__text">
        Для клиентов с любыми бюджетами создадим стартовую кампанию бесплатно.
        Подберем ключи, напишем объявления, настроим инструменты автоматизации.
      </p>
      <img src={arrowLine} alt="" className="stock__image-arrow-line" />
      <p className="stock__text">
        Для этого пополните баланс на 10 000 рублей и заполните бриф
      </p>
    </div>
  </section>
);
