import React, { useState, useEffect } from "react";
import { freshbowlConfig, navLinks, getWhatsAppUrl } from "../data/freshbowlData";

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 8);
    };

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsOpen(false);
    };

    const handleResize = () => {
      if (window.innerWidth >= 768) setIsOpen(false);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <header className={`nav ${isScrolled ? "is-scrolled" : ""}`} id="top">
      <div className="container nav__inner">
        <a href="#top" className="nav__logo" aria-label={`${freshbowlConfig.brandName}, ke bagian atas`}>
          <span className="nav__logo-mark" aria-hidden="true">🥗</span> {freshbowlConfig.brandName}
        </a>

        <nav className={`nav__menu ${isOpen ? "is-open" : ""}`} id="nav-menu" aria-label="Menu utama">
          <ul>
            {navLinks.map((link) => (
              <li key={link.href}>
                <a href={link.href} onClick={() => setIsOpen(false)}>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="nav__actions">
          <a
            className="btn btn--sm"
            href={getWhatsAppUrl()}
            target="_blank"
            rel="noopener noreferrer"
          >
            Pesan
          </a>
          <button
            className="nav__toggle"
            id="nav-toggle"
            type="button"
            aria-label={isOpen ? "Tutup menu" : "Buka menu"}
            aria-expanded={isOpen}
            aria-controls="nav-menu"
            onClick={() => setIsOpen(!isOpen)}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>
    </header>
  );
};
