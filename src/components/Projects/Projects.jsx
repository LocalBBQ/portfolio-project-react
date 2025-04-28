import React from "react";
import "./Projects.css";

const Projects = () => {
  // Sample data for projects
  const projects = [
    {
      name: "Portfolio Website",
      description: "A personal portfolio website to showcase my skills and projects.",
      tech_stack: "HTML, CSS, JavaScript, React",
    },
    {
      name: "E-commerce Platform",
      description: "A mock e-commerce platform with product listings and a shopping cart.",
      tech_stack: "React, Node.js, Express, MongoDB",
    },
    {
      name: "Weather App",
      description: "A weather application that fetches real-time weather data.",
      tech_stack: "React, OpenWeather API",
    },
  ];

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