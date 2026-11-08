import React from "react";
import { stepsData, getWhatsAppUrl } from "../data/freshbowlData";

export const HowToOrder: React.FC = () => {
  return (
    <section className="section" id="pesan">
      <div className="container">
        <div className="section__head reveal">
          <p className="eyebrow">Cara Pesan</p>
          <h2>Pesan Dengan Mudah</h2>
        </div>

        <ol className="steps">
          {stepsData.map((step) => (
            <li key={step.number} className="step reveal">
              <span className="step__num">{step.number}</span>
              <h3>{step.title}</h3>
              <p>{step.description}</p>
            </li>
          ))}
        </ol>

        <div className="center reveal">
          <a
            className="btn"
            href={getWhatsAppUrl()}
            target="_blank"
            rel="noopener noreferrer"
          >
            Chat via WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
};
