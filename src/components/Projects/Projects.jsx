import React, { useEffect, useState } from "react";
import "./Projects.css";

const Projects = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await fetch('https://dotnetbackendporfolioles.azurewebsites.net/api/projects');
        const data = await response.json();
        setProjects(data);
      } catch (error) {
        console.error('Error fetching projects:', error);
      }
    };

    fetchProjects();
  }, []);

  return (
    <div className="wrap">
      <div className="col-1-1"></div>
      <section>
        <h1>In-Class Projects</h1>
        <article id="Project-intro">
          <p>Here are some projects completed over the course of my time at NTC.</p>
        </article>
        <h2>Example Projects</h2>
        <article>
          <table>
            <thead>
              <tr>
                <th>Project Name</th>
                <th>Description</th>
                <th>Tech Stack</th>
              </tr>
            </thead>
            <tbody>
              {projects.map((project, index) => (
                <tr key={index}>
                  <td>
                    <h2>{project.name}</h2>
                  </td>
                  <td>
                    <p>{project.description}</p>
                  </td>
                  <td>
                    <b>{project.tech_stack}</b>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </article>
      </section>
      <div className="wrap"></div>
      <a href="#top">Back to top</a>
    </div>
  );
};

export default Projects;