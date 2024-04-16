import React, { useState, useEffect } from 'react';
import './projects.css';  // Import the CSS file here

const ProjectsSection = () => {
  const [projects, setProjects] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProjects = async () => {
      setIsLoading(true);
      setError(null);

      try {
        // Add your fetch URL here
        const response = await fetch('https://api.github.com/users/ShakeTatBear/repos');
        if (!response.ok) {
          throw new Error('Something went wrong!');
        }
        const data = await response.json();
        setProjects(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchProjects();
  }, []);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="projects-container">
      <h2>My Projects</h2>
      <ul className="project-list">
        {projects.map((project) => (
          <li key={project.id} className="project-item">
            <h3 className="project-title">{project.name}</h3>
            <p className="project-description">{project.description || "No description available."}</p>
            <a href={project.html_url} className="project-link" target="_blank" rel="noopener noreferrer">View on GitHub</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProjectsSection;
