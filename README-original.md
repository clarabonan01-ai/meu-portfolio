# Meu Site em React

Versão em React do layout original que você enviou.

## Como rodar

1. Abra a pasta no VS Code
2. No terminal, rode:

```bash
npm install
npm run dev
```

3. Abra o link local que o Vite mostrar no terminal

## Estrutura

```bash
meu-site-react/
├── index.html
├── package.json
├── src/
│   ├── App.jsx
│   ├── main.jsx
│   ├── styles.css
│   ├── data/
│   │   └── siteData.js
│   └── components/
│       ├── Navbar.jsx
│       ├── Hero.jsx
│       ├── ProjectsSection.jsx
│       ├── ServicesSection.jsx
│       ├── ContactSection.jsx
│       └── Footer.jsx
```

## O que foi feito

- Separação por componentes
- Dados dos cards em arquivo próprio
- CSS centralizado
- Estrutura pronta para crescer

## Próximos passos sugeridos

- adicionar menu mobile
- transformar formulário em controlado com `useState`
- trocar dados fixos por props ou API
- migrar o CSS para Tailwind ou CSS Modules, se quiser evoluir
