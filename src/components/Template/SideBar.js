import React from 'react';
import { Link } from 'react-router-dom';

import ContactIcons from '../Contact/ContactIcons';

const { PUBLIC_URL } = process.env; // set automatically from package.json:homepage

const SideBar = () => (
  <section id="sidebar">
    <section id="intro">
      <Link to="/" className="logo">
        <img src={`${PUBLIC_URL}/images/me.jpg`} alt="" />
      </Link>
      <header>
        <h2>Hadel Ladghem</h2>
        <p><a href="mailto:ladghem.hadel@gmail.com">ladghem.hadel@gmail.com</a></p>
      </header>
    </section>

    <section className="blurb">
      <h2>Qui suis-je</h2>
      <p>Hello, je suis Hadel. Alternant chez  <a href="https://www.acssi.fr/">ACSSI</a> en tant que consultant technico-fonctionel SAP. En parallèle à cela je prépare l'obtention d'un BTS SIO avec la  <a href="https://www.cfajeanbosco.fr/ufa/ufa-fresc/">FRESC </a>
       à Roubaix !
      </p>
      {/* <ul className="actions">
        <li>
          {!window.location.pathname.includes('/resume') ? <Link to="/resume" className="button">En savoir plus</Link> : <Link to="/about.js" className="button">About Me</Link>}
        </li>
      </ul> */}
    </section>

    <section id="footer">
      <ContactIcons />
      <p className="copyright">&copy; Hadel Ladghem <Link to="/">hladghem.com</Link>.</p>
    </section>
  </section>
);

export default SideBar;
