# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh


 Min App i React har jeg startet med at oprette en ny mappe på min computer. Bagefter har jeg åbnet den i VS-Code, hvor jeg har installeret i min app node.js systempakke med nogle komando: npm create vite@latest/ projektets navn/ vælg en framework - vælg react /vælg - vælg JavaScript. 
 For at starte projektet, skrivet jeg komando- npm install og for at køre min app skal jeg skrive -npm run dev i min terminal.
Mit React-projekt er struktureret i nogle Components:
- Navbar /Header / Main /Card / Section / Person /Map og Footer., som slutter med .jsx 
All Components har styling in deres Style mappe, som er skrivet med specielt ord: Navbar.module.scss, Header.module.scss osv...
 Hovedfilen in min App er App.jsx, hvor alle komponenter importeres og renderes. 

Hvis vi kigger på Components:
•	Navbar: Håndterer navigationsmenuen og firma logo;
•	Header: Viser og inkluderer herosection;
•	Main: Det viser Card Componet;
•	Section: Det inkluderer en array med  objects, hvor jeg har brugte map() method til den.
•	Person: Viser personrelateret information.
•	Map: Viser et kort med kontakt info.
•	Footer: Viser footer-sektionen.

Det var en god øvelse med det projekt 😊
