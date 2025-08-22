import React from "react";
import "./project.css";

const Project = () => {
  return (
    <div className="project">
      <h1>Projects</h1>
      <div class="projects-grid">
        <div className="project-wrap">
          <div class="project-card">
            <img src="" alt="" />
            <h3>E-commerce Website</h3>
            <p>An e-commerce website built using HTML, CSS, and JavaScript.</p>
          </div>
          <div class="project-links">
            <a href="https://github.com/yourusername/portfolio" target="_blank">
              GitHub
            </a>
            <a href="https://yourportfolio.com" target="_blank">
              Live Demo
            </a>
          </div>
        </div>

        <div className="project-wrap">
          <div class="project-card">
            <h3>To-do App</h3>
            <p>A simple task manager using React and LocalStorage.</p>
          </div>
          <div class="project-links">
            <a href="https://github.com/yourusername/portfolio" target="_blank">
              GitHub
            </a>
            <a href="https://yourportfolio.com" target="_blank">
              Live Demo
            </a>
          </div>
        </div>

        <div className="project-wrap">
          <div class="project-card">
            <h3>Weather App</h3>
            <p>Displays real-time weather data using API.</p>
          </div>
          <div class="project-links">
            <a href="https://github.com/yourusername/portfolio" target="_blank">
              GitHub
            </a>
            <a href="https://yourportfolio.com" target="_blank">
              Live Demo
            </a>
          </div>
        </div>
      </div>

      <div className="skill">
        <h2>My Skills</h2>
        <div className="skill-grid">
          <div className="skills">
            <p>
              70% <span>HTML</span>
            </p>
          </div>
          <div className="skills">
            <p>
              60% <span>CSS</span>
            </p>
          </div>
          <div className="skills">
            <p>
              15% <span>JavaScript</span>
            </p>
          </div>
          <div className="skills">
            <p>
              40% <span>React</span>
            </p>
          </div>
          <div className="skills">
            <p>
              55% <span>UI/UX</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
