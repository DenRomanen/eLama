import React from "react";

import "./footer.css";

import { FooterContent } from "./footer__content/Footer__content";
import { FooterContacts } from "./footer__contacts/Footer__contacts";

export const Footer = () => (
  <section className="footer">
    <FooterContent />
    <FooterContacts />
  </section>
);
