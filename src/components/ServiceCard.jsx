import React from 'react';

export default function ServiceCard({ service, featured = false }) {
  return (
    <article className={`service-card ${featured ? 'service-card--featured' : ''}`.trim()}>
      <div className="service-card__icon">{service.number}</div>
      <h3 className="service-card__title">{service.title}</h3>
      <p className="service-card__subtitle">{service.subtitle}</p>
      <p className="service-card__description">{service.description}</p>
      <ul className="service-card__list">
        {service.items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </article>
  );
}
