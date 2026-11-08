import React from "react";
import { testimonialsData, statsData } from "../data/freshbowlData";

export const Testimonials: React.FC = () => {
  return (
    <section className="section section--grey" id="testimoni">
      <div className="container">
        <div className="section__head reveal">
          <p className="eyebrow">Kata Mereka</p>
          <h2>Dipilih oleh yang sibuk dan peduli makan enak.</h2>
        </div>

        <div className="cards cards--3">
          {testimonialsData.map((t, index) => (
            <figure key={index} className="card quote reveal">
              <div className="stars" aria-label={`Penilaian ${t.rating} dari 5`}>
                {"★".repeat(t.rating)}
              </div>
              <blockquote>{t.quote}</blockquote>
              <figcaption>
                <strong>{t.name}</strong>
                <span>{t.role}</span>
              </figcaption>
            </figure>
          ))}
        </div>

        <ul className="stats reveal">
          {statsData.map((stat, index) => (
            <li key={index}>
              <strong>{stat.value}</strong>
              <span>{stat.label}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};
