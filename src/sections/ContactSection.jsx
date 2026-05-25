import React from 'react';

export default function ContactSection() {
  return (
    <section className="contact section" id="contact">
      <div className="container contact__panel glass-card">
        <div className="contact__aside">
          <div>
            <h2 className="contact__title">Let&apos;s open the Archive.</h2>
            <p className="contact__subtitle">
              Disponível para novos projetos.
            </p>
          </div>

          <div className="contact__meta">
            <div>
              <p className="contact__label">Direct Message</p>
              <p className="contact__email">cbonanvianna@gmail.com</p>
            </div>

            <div className="contact__socials">
              <a href="#">LinkedIn</a>
              <a href="#">GitHub</a>
              <a href="#">Read.cv</a>
            </div>
          </div>
        </div>

        <div className="contact__form-wrap">
          <form className="contact__form">
            <div className="contact__row">
              <label>
                <span>SEU NOME</span>
                <input placeholder="John Doe" type="text" />
              </label>

              <label>
                <span>ENDEREÇO DE EMAIL</span>
                <input placeholder="john@company.com" type="email" />
              </label>
            </div>

            <label>
              <span>Tipo de Projeto</span>
              <select defaultValue="Implementação de Sistema de Design">
                <option>Implementação de Sistema de Design</option>
                <option>Design de Produto (UI/UX)</option>
                <option>Arquitetura Front-end</option>
                <option>Outros</option>
              </select>
            </label>

            <label>
              <span>Visão Geral do Projeto</span>
              <textarea placeholder="Conte sobre o projeto..." rows="5" />
            </label>

            <button className="button button--primary contact__submit" type="submit">
              Enviar Mensagem
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
