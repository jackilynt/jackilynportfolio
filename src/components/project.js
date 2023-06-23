import React from 'react';
import './Project.css';

const Project = ({ title, imageSrc, deployLink, githubLink }) => {
  return (
    <div className="project">
      <img src={imageSrc} alt={title} />
      <h3>{title}</h3>
      <div>
        <a href={deployLink}>Deployed Application</a>
        <a href={githubLink}>GitHub Repository</a>
      </div>
    </div>
  );
};

export default Project;
