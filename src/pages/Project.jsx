import React from "react";
import { useParams } from "react-router-dom";

const data = {
  1: {
    image: "../images/forest.png",
    title: "Global Forestry Projects",
    location: "Global",
    tag: "REDD+",
    about:
      "The Global Forestry Projects portfolio contains a diverse array of forestry-based carbon offset initiatives worldwide, focusing on reforestation, conservation, and sustainable forest management. By supporting these projects, you're aiding in the preservation of critical ecosystems, restoring degraded lands, and helping communities transition to sustainable practices. The projects within this portfolio span various regions, tackling deforestation and promoting carbon sequestration through natural solutions.",
    impact: [
      {
        value: "150000000",
        description: "Millions of tons of carbon captured",
      },
      {
        value: "1000000",
        description: "Hectares of forest protected",
      },
    ],
    benefits: [
      "Reduces atmospheric carbon levels by preserving large forests.",
      "Provides safe habitat for wildlife around the world.",
      "Enhances water quality through natural filtration by forest ecosystems.",
      "Creates jobs and supports local communities.",
    ],
    verification: {
      description:
        "Founded in 2005, Verra’s Verified Carbon Standard (VCS) program is the world’s most widely used voluntary greenhouse gas program. The VCS sets the standard for high-quality carbon offset projects, ensuring measurable, reportable, and verifiable emission reductions. Projects like Global Forestry Projects undergo rigorous third-party audits, ensuring that each ton of carbon offset meets strict environmental and social criteria. By choosing VCS-certified projects, you are assured of impactful and credible contributions to global climate goals.",
      logo: "../images/VCS.png",
    },
  },
  2: {
    image: "../images/keo.png",
    title: "Keo Seima Wildlife Sanctuary",
    location: "Eastern Cambodia",
    tag: "REDD+",
    about:
      "Located in the heart of Cambodia, the Keo Seima Wildlife Sanctuary focuses on protecting rich biodiversity and significant carbon stocks. This sanctuary is home to endangered species, including elephants and gibbons, while also providing critical resources to local indigenous communities. The project prioritizes ecosystem preservation by preventing illegal logging, promoting sustainable land use, and supporting local livelihoods through eco-friendly practices.",
    impact: [
      {
        value: "50000000",
        description: "Millions of tons of carbon captured",
      },
      {
        value: "292000",
        description: "Hectares of forest protected",
      },
    ],
    benefits: [
      "Protects endangered species in Cambodia.",
      "Preserves the biodiversity of tropical forests.",
      "Supports local communities through sustainable practices.",
      "Enhances climate resilience by protecting large forest areas.",
    ],
    verification: {
      description:
        "Verra’s VCS standard ensures that projects like Keo Seima Wildlife Sanctuary not only reduce carbon emissions but also contribute to sustainable development and biodiversity conservation. Each project undergoes stringent verification by independent auditors, confirming its social and environmental benefits. With VCS certification, you can trust that the Keo Seima project has real, measurable impacts that align with global conservation priorities.",
      logo: "../images/VCS.png",
    },
  },
  3: {
    image: "../images/mai.png",
    title: "Mai Ndombe",
    location: "Western Democratic Republic of the Congo",
    tag: "REDD+",
    about:
      "Situated in the Congo Basin, the Mai Ndombe project aims to conserve one of the world's largest tropical rainforests. This project combats deforestation, safeguards wildlife, and improves the livelihoods of surrounding communities. As the 'lungs of Africa,' this rainforest plays a vital role in absorbing CO2 and regulating global weather patterns, making its protection essential for the climate.",
    impact: [
      {
        value: "25000000",
        description: "Millions of tons of carbon captured",
      },
      {
        value: "300000",
        description: "Hectares of forest protected",
      },
    ],
    benefits: [
      "Prevents deforestation in the Congo Basin.",
      "Supports wildlife and biodiversity.",
      "Provides sustainable employment for local communities.",
      "Mitigates global warming by conserving vast forest areas.",
    ],
    verification: {
      description:
        "The Mai Ndombe project is certified by Verra’s VCS, which rigorously verifies its carbon reduction claims and environmental impact. Through regular auditing, VCS certification ensures transparency, accountability, and adherence to best practices in carbon sequestration and ecosystem protection. Your support of VCS-certified projects like Mai Ndombe drives effective climate action with verifiable results.",
      logo: "../images/VCS.png",
    },
  },
  4: {
    image: "../images/forest.png",
    title: "Envira Amazonia Project",
    location: "State of Acre, Brazil",
    tag: "REDD+",
    about:
      "The Envira Amazonia Project protects over 39,000 hectares of Amazon rainforest, helping to reduce deforestation and conserve biodiversity. Situated in the State of Acre, Brazil, this project collaborates with indigenous communities to protect traditional lands and conserve one of the most diverse ecosystems on the planet. In addition to preventing deforestation, it promotes sustainable land management and improves the livelihoods of local families.",
    impact: [
      {
        value: "120000000",
        description: "Millions of tons of carbon captured",
      },
      {
        value: "500000",
        description: "Hectares of forest protected",
      },
    ],
    benefits: [
      "Reduces deforestation in the Amazon rainforest.",
      "Helps in protecting indigenous communities' rights.",
      "Promotes biodiversity in one of the world's richest ecosystems.",
      "Provides carbon offset for sustainable development.",
    ],
    verification: {
      description:
        "Envira Amazonia’s VCS certification guarantees that the project delivers real, measurable climate benefits. Through strict standards and independent audits, VCS ensures the project’s ongoing impact and its adherence to sustainability and social responsibility guidelines. Supporting Envira Amazonia means contributing to a trusted, impactful carbon offset project certified by Verra.",
      logo: "../images/VCS.png",
    },
  },
  5: {
    image: "../images/katingan.png",
    title: "Katingan Peatland Restoration and Conservation Project",
    location: "Central Kalimantan, Indonesia",
    tag: "REDD+",
    about:
      "Katingan Peatland is an ambitious restoration project aimed at protecting Indonesia’s valuable peatland ecosystems. Peatlands store massive amounts of carbon and play a critical role in regulating water cycles and reducing fire risks. This project focuses on peatland restoration, conservation, and community engagement, with the goal of achieving long-term climate benefits and biodiversity conservation.",
    impact: [
      {
        value: "80000000",
        description: "Millions of tons of carbon captured",
      },
      {
        value: "149000",
        description: "Hectares of peatland protected",
      },
    ],
    benefits: [
      "Preserves peatlands, a critical natural carbon sink.",
      "Reduces risk of forest fires and protects air quality.",
      "Supports the biodiversity of peatland ecosystems.",
      "Enhances climate resilience for surrounding communities.",
    ],
    verification: {
      description:
        "The VCS certification for Katingan Peatland Restoration ensures that all aspects of the project are verified for environmental integrity and sustainability. VCS auditors monitor carbon storage, ecosystem health, and social impacts, ensuring that each contribution effectively mitigates climate change while supporting local communities.",
      logo: "../images/VCS.png",
    },
  },
  6: {
    image: "../images/rimba.png",
    title: "Rimba Raya Biodiversity Reserve",
    location: "Central Kalimantan, Indonesia",
    tag: "REDD+",
    about:
      "Rimba Raya is a biodiversity reserve committed to preserving tropical rainforest ecosystems and endangered species like orangutans. This project protects large swaths of land from deforestation, prevents peatland degradation, and offers sustainable livelihood options to local communities. By focusing on biodiversity and carbon storage, Rimba Raya plays a critical role in Indonesia's environmental sustainability.",
    impact: [
      {
        value: "90000000",
        description: "Millions of tons of carbon captured",
      },
      {
        value: "65000",
        description: "Hectares of forest protected",
      },
    ],
    benefits: [
      "Protects habitat for endangered species, including orangutans.",
      "Enhances biodiversity through forest conservation.",
      "Supports sustainable livelihoods for local communities.",
      "Reduces greenhouse gas emissions by preventing deforestation.",
    ],
    verification: {
      description:
        "Rimba Raya’s VCS certification underscores the project’s commitment to high standards in carbon sequestration, biodiversity protection, and community development. VCS’s rigorous auditing process ensures that contributions to Rimba Raya achieve verified climate impact, protecting vital ecosystems while supporting local economic growth.",
      logo: "../images/VCS.png",
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
              <img src="../icons/earth.svg" alt="" style={styles.impactIcon} />
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
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    textAlign: "center",
  },
  impactIcon: {
    width: "150px",
    height: "150px",
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
