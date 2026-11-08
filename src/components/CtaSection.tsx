import React from "react";
import { getWhatsAppUrl } from "../data/freshbowlData";

export const CtaSection: React.FC = () => {
  return (
    <section className="section section--tight">
      <div className="container">
        <div className="final reveal">
          <h2>Siap makan lebih segar hari ini?</h2>
          <p>Chat kami sekarang dan bowl-mu langsung kami siapkan.</p>
          <a
            className="btn btn--light btn--lg"
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
