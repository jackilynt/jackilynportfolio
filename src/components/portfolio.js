import React from 'react';
import Project from './Project';

const Portfolio = () => {
  const projects = [
    {
      title: 'Project 1',
      imageSrc: 'path/to/project1.png',
      deployLink: 'https://example.com/project1',
      githubLink: 'https://github.com/example/project1',
    },
    // Add more project objects here
  ];

  return (
    <section id="portfolio">
      <h2>Portfolio</h2>
      <div className="projects">
        {projects.map((project, index) => (
          <Project key={index} {...project} />
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
