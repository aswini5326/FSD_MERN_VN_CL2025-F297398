import React from "react";
import "../pages/About.css"

const About = () => {
  return (
    <div className="about">
      <h2>About Our College</h2>
      <section>
        <h3>History</h3>
        <p>
          Founded in 1990, Our college has grown into a reputable institution
          offering a wide range of programs.
        </p>
      </section>

      <section>
        <h3>Mission & Vision</h3>
        <p>
          <strong>Mission:</strong> Provide high-quality education and empower
          students for global challenges.
        </p>
        <p>
          <strong>Vision:</strong> To be a center of excellence in education and
          research.
        </p>
      </section>

      <section>
        <h3>Achievements</h3>
        <div className="achievements">
          <div className="card">2024 - NAAC Accredited A+</div>
          <div className="card">2023 - Best Placements in Region</div>
          <div className="card">2022 - Research Grants Secured</div>
        </div>
      </section>
    </div>
  );
};

export default About;
