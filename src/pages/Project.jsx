import React from "react";
import { useParams } from "react-router-dom";

const data = {
  1: {
    image: "../images/forest.png",
    title: "Global Forestry Projects",
    location: "Global",
    tag: "REDD+",
    about:
      "This curated portfolio contains a variety of forestry-based carbon offset projects...",
    impact: [
      {
        icon: "https://via.placeholder.com/50",
        value: "150000000",
        description: "Millions of tons of carbon captured",
      },
      {
        icon: "https://via.placeholder.com/50",
        value: "1000000",
        description: "Hectares of forest are protected",
      },
    ],
    benefits: [
      "Reduces the amount of carbon in the atmosphere...",
      "Provides safe and protected habitat to wildlife...",
      "Protects the local water supplies...",
      "Supports projects that provide jobs and education...",
    ],
    verification: {
      description:
        "Founded in 2005, Verra is a global leader helping tackle...",
      logo: "https://via.placeholder.com/100x40",
    },
  },
};

const Project = () => {
  const { id } = useParams();
  const projectData = data[id || 1];

  console.log(projectData);

  return (
    <div style={styles.container}>
      <a href="../projects" style={styles.backLink}>
        ← Back to Projects Selection
      </a>

      <h2 style={styles.title}>Project Selection</h2>
      <p style={styles.subtitle}>
        Select high-quality EcoCart projects - work to combat climate change.
      </p>

      <div style={styles.projectCard}>
        <img
          src={projectData.image}
          alt={projectData.title}
          style={styles.projectImage}
        />
        <div style={styles.projectDetails}>
          <p style={styles.portfolioText}>Portfolio</p>
          <h3 style={styles.projectTitle}>{projectData.title}</h3>
          <p style={styles.location}>{projectData.location}</p>
          <span style={styles.tag}>{projectData.tag}</span>
          <button style={styles.activeProjectButton}>Active Project</button>
        </div>
      </div>

      <section style={styles.section}>
        <h3 style={styles.sectionTitle}>About</h3>
        <p>{projectData.about}</p>
      </section>

      <section style={styles.section}>
        <h3 style={styles.sectionTitle}>Impact</h3>
        <div style={styles.impactMetrics}>
          {projectData.impact.map((metric, index) => (
            <div key={index} style={styles.impactMetric}>
              <img src={metric.icon} alt="" style={styles.impactIcon} />
              <p style={styles.impactValue}>{metric.value}</p>
              <p style={styles.impactDescription}>{metric.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section style={styles.section}>
        <h3 style={styles.sectionTitle}>Benefits</h3>
        <ul>
          {projectData.benefits.map((benefit, index) => (
            <li key={index} style={styles.benefitItem}>
              <span style={styles.bulletPoint}>•</span> {benefit}
            </li>
          ))}
        </ul>
      </section>

      {/* <section style={styles.section}>
        <h3 style={styles.sectionTitle}>Photos</h3>
        <div style={styles.photoGallery}>
          {projectData.photos.map((photo, index) => (
            <img key={index} src={photo} alt="Project" style={styles.photo} />
          ))}
        </div>
      </section> */}

      <section style={styles.section}>
        <h3 style={styles.sectionTitle}>Verifications</h3>
        <p>{projectData.verification.description}</p>
        <img
          src={projectData.verification.logo}
          alt="Verification Logo"
          style={styles.verificationLogo}
        />
      </section>
    </div>
  );
};

const styles = {
  container: {
    width: "100%",
    padding: "20px 18rem",
    backgroundColor: "#f5f7fa",
  },
  backLink: {
    fontSize: "14px",
    color: "#007bff",
    textDecoration: "none",
    marginBottom: "10px",
    display: "inline-block",
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
  projectCard: {
    backgroundColor: "#fff",
    borderRadius: "8px",
    padding: "20px",
    display: "flex",
    gap: "20px",
    alignItems: "start",
    flexDirection: "column",
    marginBottom: "30px",
  },
  projectImage: {
    width: "100%",
    borderRadius: "8px",
  },
  projectDetails: {
    flex: "1",
  },
  portfolioText: {
    fontSize: "12px",
    color: "#007bff",
    marginBottom: "4px",
  },
  projectTitle: {
    fontSize: "20px",
    fontWeight: "bold",
    marginBottom: "4px",
  },
  location: {
    fontSize: "14px",
    color: "#666",
    marginBottom: "8px",
  },
  tag: {
    backgroundColor: "#00C853",
    color: "#fff",
    padding: "4px 8px",
    borderRadius: "4px",
    fontSize: "12px",
    display: "inline-block",
    marginBottom: "15px",
  },
  activeProjectButton: {
    backgroundColor: "#007bff",
    color: "#fff",
    padding: "8px 16px",
    borderRadius: "4px",
    border: "none",
    cursor: "pointer",
  },
  section: {
    backgroundColor: "#fff",
    padding: "20px",
    borderRadius: "8px",
    marginBottom: "20px",
  },
  sectionTitle: {
    fontSize: "18px",
    fontWeight: "bold",
    marginBottom: "10px",
  },
  impactMetrics: {
    display: "flex",
    justifyContent: "space-around",
  },
  impactMetric: {
    textAlign: "center",
  },
  impactIcon: {
    width: "50px",
    height: "50px",
    marginBottom: "10px",
  },
  impactValue: {
    fontSize: "24px",
    fontWeight: "bold",
  },
  impactDescription: {
    fontSize: "14px",
    color: "#666",
  },
  benefitItem: {
    fontSize: "14px",
    color: "#666",
    marginBottom: "8px",
    display: "flex",
    alignItems: "center",
  },
  bulletPoint: {
    color: "#00C853",
    fontSize: "20px",
    marginRight: "8px",
  },
  photoGallery: {
    display: "flex",
    overflowX: "auto",
  },
  photo: {
    width: "120px",
    height: "80px",
    objectFit: "cover",
    borderRadius: "4px",
    marginRight: "8px",
  },
  verificationLogo: {
    width: "100px",
    marginTop: "10px",
  },
};

export default Project;
