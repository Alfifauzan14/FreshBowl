import React from "react";
import { freshbowlConfig, navLinks, getWhatsAppUrl } from "../data/freshbowlData";

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer" id="kontak">
      <div className="container">
        <div className="footer__grid">
          <div>
            <a href="#top" className="nav__logo">
              <span className="nav__logo-mark" aria-hidden="true">🥗</span> {freshbowlConfig.brandName}
            </a>
            <p className="footer__about">{freshbowlConfig.aboutText}</p>
          </div>
          <div>
            <h3>Hubungi Kami</h3>
            <ul className="footer__list">
              <li>
                <a
                  href={getWhatsAppUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  WhatsApp: +{freshbowlConfig.whatsappNumber}
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3>Jelajahi</h3>
            <ul className="footer__list">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a href={link.href}>{link.label}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <p className="footer__copy">
          © {currentYear} {freshbowlConfig.brandName}. Semua hak dilindungi.
        </p>
      </div>
    </footer>
  );
};
