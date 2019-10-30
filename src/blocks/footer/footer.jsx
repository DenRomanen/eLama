import React from "react";

import "./footer.css";

import { FooterContent } from "./footer__content/footer__content";
import { FooterContacts } from "./footer__contacts/footer__contacts";

export const Footer = () => (
  <section className="footer">
    <FooterContent />
    <FooterContacts />
  </section>
);
