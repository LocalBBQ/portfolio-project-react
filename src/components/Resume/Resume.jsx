import React from "react";
import './Resume.css';

const Resume = () => {
  return (
    <div className="wrap">
      <div className="col-1-1"></div>
      <section>
        <h1>Resume</h1>
        <article id="Resume-intro">
          <p>Build relevant and marketable skills to re-enter the IT field.</p>
          <h2>Education</h2>
          <p>Rosholt High School 2016</p>
          <p>University of Wisconsin La Crosse 2016-2018</p>
          <p>NTC 2018-2021 & 2025</p>
          <h2>Relevant Experience</h2>
          <p>
            Built Company Website for{" "}
            <a href="https://dekesindelray.com">dekesindelray.com</a>
          </p>
          <p>Manage procurement of product</p>
          <p>Responsible for online fulfillment</p>
          <h2>Employment History</h2>
          <p>Tutor - NTC 2019-2020</p>
          <p>Business Operator - Deke's In Delray 2021-2025</p>
          <p>Lead Roaster - Deke's In Delray 2021-2025</p>
          <p>Barista - 2021-2025 Deke's In Delray</p>
        </article>
      </section>
      <section id="Activities">
        <h2>Activities</h2>
        <ul>
          <li>Computer Club at NTC.</li>
          <li>Varsity E-Sports Team at NTC</li>
        </ul>
      </section>
      <div className="wrap"></div>
      <a href="#top">Back to top</a>
    </div>
  );
};

export default Resume;