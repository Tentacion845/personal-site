import React from "react";
import { Link } from "react-router-dom";

import Main from "../layouts/Main";

import Cell from "../components/Projects/Cell";
import data from "../data/projects";

const Projects = () => (
  <Main title="Projects" description="Learn about Hadel Ladghem's projects.">
    <article className="post" id="projects">
      <header>
        <div className="title">
          <h2>
            <Link to="/projects">Mes Projets</Link>
          </h2>
          <p>projets réalisés en entreprise et en formation</p>
        </div>
      </header>
      {data.map((project) => (
        <Cell data={project} key={project.title} />
      ))}
    </article>
  </Main>
);

export default Projects;
