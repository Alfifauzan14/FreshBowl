import React from "react";
import { featuresData } from "../data/freshbowlData";

export const Features: React.FC = () => {
  const renderIcon = (type: string) => {
    switch (type) {
      case "leaf":
        return (
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
            <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.5 19 2c1 2 2 4.2 2 8 0 5.5-4.8 10-10 10Z" />
            <path d="M2 21c0-3 1.9-5.5 5-7" />
          </svg>
        );
      case "scale":
        return (
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 3v18" />
            <path d="M5 8h14" />
            <path d="M7 8l-3 7a3 3 0 0 0 6 0L7 8Z" />
            <path d="M17 8l-3 7a3 3 0 0 0 6 0l-3-7Z" />
          </svg>
        );
      case "delivery":
        return (
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
            <path d="M3 7h11v9H3z" />
            <path d="M14 10h4l3 3v3h-7" />
            <circle cx="7" cy="18" r="2" />
            <circle cx="17" cy="18" r="2" />
          </svg>
        );
      default:
        return null;
    }
  };

  return (
    <section className="section" id="keunggulan">
      <div className="container">
        <div className="section__head reveal">
          <p className="eyebrow">Kenapa Freshbowl</p>
          <h2>Sehat itu enak, praktis, dan terjangkau.</h2>
        </div>

        <div className="cards cards--3">
          {featuresData.map((feature) => (
            <article key={feature.id} className="card feature reveal">
              <div className="icon" aria-hidden="true">
                {renderIcon(feature.iconType)}
              </div>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
