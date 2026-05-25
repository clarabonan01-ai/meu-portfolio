import React from 'react';
import ServiceCard from '../components/ServiceCard';
import { services } from '../data/siteData';

export default function ServicesSection() {
  return (
    <section className="services section" id="services">
      <div className="container">
        <div className="section-head">
          <h2 className="section-title">Habilidades</h2>
        </div>

        <div className="services__grid">
          {services.map((service, index) => (
            <ServiceCard
              key={service.title}
              service={service}
              featured={index === 1}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
