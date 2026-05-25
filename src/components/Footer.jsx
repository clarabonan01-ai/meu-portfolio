import React from 'react';
import { footerLinks } from '../data/siteData';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__content">
        <div className="footer__brand">The Tactile Archive</div>

        <div className="footer__meta">
          <div className="footer__links">
            {footerLinks.map((link) => (
              <a key={link.label} className="footer__link" href={link.href}>
                {link.label}
              </a>
            ))}
          </div>
          <p className="footer__copy">© {new Date().getFullYear()} The Tactile Archive. Built with Precision.</p>
        </div>
      </div>
    </footer>
  );
}
