import React from "react";
import './Home.css';

const Home = () => {
  return (
    <div className="wrap">
      <div className="col-1-1"></div>
      <section>
        <h1>Portfolio - Louis Schultz</h1>
        <article id="intro">
          <img
            src="/public/img_headshot.jpg"
            id="headshot"
            alt="Missing Photo"
          />
          <p className="asidetext">
            -An outline of Louis' professional and academic background.
          </p>
          <h2>Preface</h2>
          <p>
            Louis is a driven and adaptable IT professional with a background in
            software development and entrepreneurship. He is experienced in
            business operations, e-commerce, web development, and community
            engagement. Passionate about leveraging technical and problem-solving
            skills, he is excited to transition back into the IT industry.
          </p>
          <table className="home">
            <caption>Skills & Strengths</caption>
            <summary>
              A quick summary and overview of Louis' skills and strengths.
            </summary>
            <br />
            <thead>
              <tr>
                <th>Technical Skills</th>
                <th>Key Strengths</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th>Web Development (HTML, CSS, JavaScript)</th>
                <td>
                  <li>Quick-thinking and adaptable problem-solver</li>
                </td>
              </tr>
              <tr>
                <th>E-commerce & Online Fulfillment</th>
                <td>
                  <li>Entrepreneurial mindset with a passion for technology</li>
                </td>
              </tr>
              <tr>
                <th>Business Operations & Management</th>
                <td>
                  <li>Strong communication and collaboration skills</li>
                </td>
              </tr>
            </tbody>
          </table>
          <h2>Conclusion</h2>
          <p>
            Louis is a driven and adaptable IT professional with a background in
            software development and entrepreneurship. He is experienced in
            business operations, e-commerce, web development, and community
            engagement. Passionate about leveraging technical and problem-solving
            skills to transition back into the IT industry.
          </p>
        </article>
      </section>
      <br />
      <h3>More information and how to contact me.</h3>
      <p>
        Connect with me at my LinkedIn!:{" "}
        <a href="https://www.linkedin.com/in/louis-schultz-31410212a/">
          https://www.linkedin.com/in/louis-schultz-31410212a/
        </a>
      </p>
      <p>
        Email:{" "}
        <a href="mailto:leschultz1@students.ntc.edu">
          leschultz1@students.ntc.edu
        </a>
      </p>
      <aside>
        <h2>Classes this semester</h2>
      </aside>
      <ul>
        <li>Open Source Web Development</li>
        <li>Mobile Development</li>
        <li>Advanced .NET C</li>
      </ul>
      <a href="/resume">See my resume -</a>
      <br />
      <a href="#top">Back to top</a>
    </div>
  );
};

export default Home;