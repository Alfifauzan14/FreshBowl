import React from "react";
import { menuData, getWhatsAppUrl } from "../data/freshbowlData";

export const MenuSection: React.FC = () => {
  return (
    <section className="section section--grey" id="menu">
      <div className="container">
        <div className="section__head reveal">
          <p className="eyebrow">Pilihan Bowl</p>
          <h2>Pilih bowl favoritmu.</h2>
          <p className="section__lead">
            Tiga varian dengan harga ramah di kantong. Semua bisa disesuaikan dengan seleramu.
          </p>
        </div>

        <div className="cards cards--3">
          {menuData.map((item) => (
            <article key={item.id} className="card menu-card reveal">
              <div className="menu-card__img">
                <img
                  src={item.image}
                  alt={item.imageAlt}
                  loading="lazy"
                  width={640}
                  height={640}
                />
              </div>
              <div className="menu-card__body">
                <div className="menu-card__top">
                  <h3>{item.name}</h3>
                  <span className="price">{item.price}</span>
                </div>
                <p>{item.description}</p>
                <p className="menu-card__items">
                  <strong>Isi:</strong> {item.ingredients}
                </p>
                <a
                  className="btn btn--sm btn--block"
                  href={getWhatsAppUrl(`Halo Freshbowl, saya mau pesan ${item.name}`)}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Pesan Bowl Ini
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
