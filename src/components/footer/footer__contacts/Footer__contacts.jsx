import React from "react";

import "./footer__contacts.css";
import "./footer__contacts-ico.css";
import "./footer__contacts-data.css";

export const FooterContacts = () => (
  <div className="footer__contacts">
    <div className="footer__contacts-links">
      <div className="footer__contacts-links-city">
        <a
          href="https://elama.ru/tools/"
          className="footer__contacts-links_home"
        ></a>

        <div className="footer__contacts-links_moskva">
          <a
            href="tel:+74992702790"
            className="footer__contacts-links_moskva-tel"
          >
            8 (499) 270-27-90
          </a>
          <p className="footer__contacts-links_moskva-name">Москва</p>
        </div>
        <div className="footer__contacts-links_moskva">
          <a
            href="tel:+78123184054"
            className="footer__contacts-links_moskva-tel"
          >
            8 (812) 318-40-54
          </a>
          <p className="footer__contacts-links_moskva-name">Санкт-Петербург</p>
        </div>
        <div className="footer__contacts-links_moskva">
          <a
            href="tel:+78005003190"
            className="footer__contacts-links_moskva-tel"
          >
            8 (800) 500-31-90
          </a>
          <p className="footer__contacts-links_moskva-name">Звонки по России</p>
        </div>
        <div className="footer__contacts-links_moskva">
          <a
            href="mailto:milo@elama.ru"
            className="footer__contacts-links_email"
          >
            milo@elama.ru
          </a>
          <a
            href="https://elama.ru/contacts/requisites/"
            className="footer__contacts-links_email"
          >
            Реквизиты
          </a>
        </div>
      </div>
      <div className="footer__contacts-links-icons">
        <a
          href="https://vk.com/elama"
          className="footer__contacts-links_web vk"
        ></a>
        <a
          href="https://www.facebook.com/allcontext/"
          className="footer__contacts-links_web fk"
        ></a>
        <a
          href="https://twitter.com/elama__ru"
          className="footer__contacts-links_web tw"
        ></a>
        <a
          href="https://www.youtube.com/channel/UCWFX2t6rtMyHvzB9eHNh_qg"
          className="footer__contacts-links_web you"
        ></a>
        <a
          href="http://elama.tech/"
          className="footer__contacts-links_web tech"
        ></a>
        <a
          href="https://elama.ru/feed/"
          className="footer__contacts-links_web feed"
        ></a>
      </div>
    </div>

    <div className="footer__contacts-data">
      <div className="footer__contacts-data_text">
        © 2008—2018 eLama.ru. Все права защищены
      </div>
      <a href="#" className="footer__contacts-data_link">
        Политика в отношении обработки персональных данных
      </a>
    </div>
  </div>
);
