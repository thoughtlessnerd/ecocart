import React from "react";
import { Link } from "react-router-dom";

const Projects = () => {
  const currentProject = {
    title: "Global Forestry Projects",
    location: "Global",
    image: "./images/forest.png", // Replace with actual image URL
    tag: "REDD+",
    tagColor: "#00C853",
  };

  const projectList = [
    {
      title: "Keo Seima Wildlife Sanctuary",
      location: "Eastern Cambodia",
      image: "./images/keo.png", // Replace with actual image URL
      tag: "REDD+",
      tagColor: "#00C853",
    },
    {
      title: "Mai Ndombe",
      location: "Western Democratic Republic of the Congo",
      image: "./images/mai.png", // Replace with actual image URL
      tag: "REDD+",
      tagColor: "#00C853",
    },
    {
      title: "Envira Amazonia Project",
      location: "State of Acre, Brazil",
      image: "./images/forest.png", // Replace with actual image URL
      tag: "REDD+",
      tagColor: "#00C853",
    },
    {
      title: "Katingan Peatland Restoration and Conservation Project",
      location: "Central Kalimantan, Indonesia",
      image: "./images/katingan.png", // Replace with actual image URL
      tag: "REDD+",
      tagColor: "#00C853",
    },
    {
      title: "Rimba Raya Biodiversity Reserve",
      location: "Central Kalimantan, Indonesia",
      image: "./images/rimba.png", // Replace with actual image URL
      tag: "REDD+",
      tagColor: "#00C853",
    },
  ];

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>Project Selection</h2>
      <p style={styles.subtitle}>
        Select high-quality StreakShip projects - work to combat climate change.
      </p>

      <section style={styles.section}>
        <h3 style={styles.sectionTitle}>Current Project</h3>
        <Link to="/projects/1">
          <ProjectCard project={currentProject} />
        </Link>
      </section>

      <section style={styles.section}>
        <h3 style={styles.sectionTitle}>Project List</h3>
        {projectList.map((project, index) => (
          <Link to={`/projects/${index + 2}`} key={index}>
            <ProjectCard key={index} project={project} />
          </Link>
        ))}
      </section>
    </div>
  );
};

const ProjectCard = ({ project }) => {
  return (
    <div style={styles.card}>
      <img src={project.image} alt={project.title} style={styles.image} />
      <div style={styles.cardContent}>
        <span style={styles.portfolioTag}>Portfolio</span>
        <h4 style={styles.projectTitle}>{project.title}</h4>
        <p style={styles.location}>{project.location}</p>
        <span style={{ ...styles.tag, backgroundColor: project.tagColor }}>
          {project.tag}
        </span>
      </div>
    </div>
  );
};

const styles = {
  container: {
    width: "100%",
    padding: "20px 12rem",
    backgroundColor: "#f5f7fa",
  },
  title: {
    fontSize: "24px",
    fontWeight: "bold",
    marginBottom: "10px",
  },
  subtitle: {
    fontSize: "16px",
    color: "#666",
    marginBottom: "30px",
  },
  section: {
    marginBottom: "30px",
  },
  sectionTitle: {
    fontSize: "18px",
    fontWeight: "bold",
    color: "#333",
    marginBottom: "15px",
  },
  card: {
    display: "flex",
    alignItems: "center",
    backgroundColor: "#fff",
    padding: "15px",
    borderRadius: "8px",
    // boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    marginBottom: "15px",
  },
  image: {
    width: "80px",
    height: "80px",
    borderRadius: "4px",
    marginRight: "15px",
  },
  cardContent: {
    display: "flex",
    alignItems: "flex-start",
    flexDirection: "column",
  },
  portfolioTag: {
    fontSize: "12px",
    color: "#007bff",
    marginBottom: "4px",
  },
  projectTitle: {
    fontSize: "16px",
    fontWeight: "bold",
    marginBottom: "4px",
  },
  location: {
    fontSize: "14px",
    color: "#666",
    marginBottom: "8px",
  },
  tag: {
    padding: "4px 8px",
    borderRadius: "20px",
    fontSize: "12px",
    color: "#fff",
    display: "inline-block",
  },
};

export default Projects;
