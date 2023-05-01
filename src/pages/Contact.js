import React from "react";
import { Link } from "react-router-dom";

import Main from "../layouts/Main";
import EmailLink from "../components/Contact/EmailLink";
import ContactIcons from "../components/Contact/ContactIcons";

const Contact = () => (
  <Main
    title="Contact"
    description="Contact Hadel Ladghem via email : ladghem.hadel@gmail.com"
  >
    <article className="post" id="contact">
      <header>
        <div className="title">
          <h2>
            <Link to="/contact">Contact</Link>
          </h2>
        </div>
      </header>
      <div className="email-at">
        <p>N'hésitez pas à prendre contact. vous-pouvez m'envoyer un mail à cette adresse : </p>
        <EmailLink />
      </div>
      <ContactIcons />
    </article>
  </Main>
);

export default Contact;
