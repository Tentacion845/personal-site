import React from "react";
import { Link } from "react-router-dom";

import Main from "../layouts/Main";

const Index = () => (
  <Main
    description={
      "Hadel Ladghem's personal website."
    }
  >
    <article className="post" id="index">
      <header>
        <div className="title">
          <h2>
            <Link to="/">A propos de ce site</Link>
          </h2>
          <p>
            Un joli, responsive, généré-statiquement, application react 
            codé en JavaScript moderne.
          </p>
        </div>
      </header>
      <p>
        {" "}
        Bienvenue sur mon site web, vous pouvez {" "}
        <Link to="/about">en savoir plus sur moi</Link>, ou alors consulter {" "}
        {/* <Link to="/resume">resume</Link>,  */}
        <Link to="/projects">mes projets</Link>, ou encore {" "}
        {/* view <Link to="/stats">site statistics</Link>, or{" "} */}
        <Link to="/contact">me contacter.</Link> 
      </p>
      <p>
        {" "}
        {/* Source available{" "}
        <a href="https://github.com/hladghem/personal-site">here</a>. */}
      </p>
    </article>
  </Main>
);

export default Index;
