import React from "react";
import { freshbowlConfig, getWhatsAppUrl } from "../data/freshbowlData";

export const Hero: React.FC = () => {
  return (
    <section className="hero">
      <img
        className="leaf leaf--1"
        src="/img/leaf1.png"
        alt="Daun hijau segar melayang"
        aria-hidden="true"
        loading="lazy"
      />
      <img
        className="leaf leaf--2"
        src="/img/leaf2.png"
        alt="Daun selada hijau melayang"
        aria-hidden="true"
        loading="lazy"
      />
      <img
        className="leaf leaf--3"
        src="/img/leaf1.png"
        alt="Daun hijau kecil melayang"
        aria-hidden="true"
        loading="lazy"
      />
      <img
        className="leaf leaf--4"
        src="/img/leaf2.png"
        alt="Daun selada kecil melayang"
        aria-hidden="true"
        loading="lazy"
      />

      <div className="container hero__grid">
        <div className="hero__text">
          <p className="eyebrow">{freshbowlConfig.heroEyebrow}</p>
          <h1>{freshbowlConfig.heroHeading}</h1>
          <p className="hero__sub">{freshbowlConfig.heroSubheading}</p>

          <div className="hero__cta">
            <a
              className="btn"
              href={getWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
            >
              Pesan Sekarang
            </a>
            <a className="btn btn--ghost" href="#menu">
              Lihat Menu
            </a>
          </div>

          <ul className="hero__facts">
            {freshbowlConfig.heroFacts.map((fact, index) => (
              <li key={index}>{fact}</li>
            ))}
          </ul>
        </div>

        <div className="hero__visual">
          <div className="blob" aria-hidden="true"></div>
          <img
            className="hero__bowl"
            src="/img/bowl.png"
            alt="Semangkuk Healthy Salad Bowl berisi selada, ayam panggang, alpukat, tomat ceri, jagung, dan wortel"
            width={850}
            height={813}
          />
          <div className="hero__badge">
            <span>Mulai dari</span>
            <strong>{freshbowlConfig.startingPrice}</strong>
          </div>
        </div>
      </div>
    </section>
  );
};
