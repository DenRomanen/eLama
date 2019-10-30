import React from "react";

import img1 from "../../../images/004-imac.png";
import img2 from "../../../images/006-student.png";
import img3 from "../../../images/002-stats.png";

import "./advertising.css";

export const Advertising = () => (
  <section className="advertising">
    <div className="advertising__body">
      <h1 className="advertising__title">
        Ведем контекстную и таргетированную рекламу
      </h1>
      <div className="advertising__content">
        <div className="advertising__content-paragraph">
          <img
            src={img1}
            alt="imac"
            className="advertising__content-paragraph_icon"
          />
          <h3 className="advertising__content-paragraph_subtitle">
            Привлекаем целевой трафик на сайт
          </h3>
          <p className="advertising__content-paragraph_text">
            Создаем и оптимизируем рекламные кампании с&nbsp;учетом особенностей
            вашего бизнеса, чтобы вы&nbsp;получали максимум потенциальных
            клиентов
          </p>
        </div>
        <div className="advertising__content-paragraph">
          <img
            src={img2}
            alt="student"
            className="advertising__content-paragraph_icon"
          />
          <h3 className="advertising__content-paragraph_subtitle">
            Совершенствуем нашу работу
          </h3>
          <p className="advertising__content-paragraph_text">
            Используем все возможности рекламных систем и&nbsp;eLama для
            результативной работы с рекламными кампаниями
          </p>
        </div>
        <div className="advertising__content-paragraph">
          <img
            src={img3}
            alt="stats"
            className="advertising__content-paragraph_icon"
          />
          <h3 className="advertising__content-paragraph_subtitle">
            Помогаем стать эффективнее
          </h3>
          <p className="advertising__content-paragraph_text">
            Выбираем метрики в соответствии с вашими бизнес-задачами и понятно
            рассказываем о&nbsp;результатах рекламы
          </p>
        </div>
      </div>
    </div>
  </section>
);
