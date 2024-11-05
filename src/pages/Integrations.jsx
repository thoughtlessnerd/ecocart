import React from "react";

const Integrations = () => {
  const integrations = [
    {
      name: "Recharge",
      description: "Recharge is the leading subscriptions payments platform",
      url: "https://example.com/recharge",
      installationRequired: true,
      actions: ["Learn More", "Connect"],
      icon: "./icons/recharge.svg", // Replace with actual icon URL
    },
    {
      name: "Rebuy",
      description:
        "A Fully-Integrated Suite of Omnichannel Personalization Solutions",
      url: "https://example.com/rebuy",
      installationRequired: true,
      actions: ["Learn More"],
      icon: "./icons/rebuy.svg", // Replace with actual icon URL
    },
    {
      name: "Klaviyo",
      description:
        "Klaviyo automates marketing for businesses, boosting customer engagement and sales",
      url: "https://example.com/klaviyo",
      installationRequired: true,
      actions: ["Learn More"],
      icon: "./icons/klaviyo.svg", // Replace with actual icon URL
    },
  ];

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>Integrations</h2>
      <p style={styles.subtitle}>
        Easy-to-use integrations that connect StreakShip with your ecommerce
        stack
      </p>

      <div style={styles.cardContainer}>
        {integrations.map((integration, index) => (
          <IntegrationCard key={index} integration={integration} />
        ))}
      </div>
    </div>
  );
};

const IntegrationCard = ({ integration }) => {
  return (
    <div style={styles.card}>
      <div style={styles.cardContent}>
        <div
          style={{
            display: "flex",
            gap: "10px",
          }}
        >
          <img
            src={integration.icon}
            alt={integration.name}
            style={styles.icon}
          />
          <a
            href={integration.url}
            target="_blank"
            rel="noopener noreferrer"
            style={styles.integrationName}
          >
            {integration.name}
            <span style={styles.externalLinkText}>Go To App</span>
          </a>
        </div>
        <p style={styles.description}>{integration.description}</p>
        {integration.installationRequired && (
          <p style={styles.installationNote}>App installation required</p>
        )}
      </div>
      <div style={styles.cardActions}>
        {integration.actions.map((action, index) => (
          <button
            key={index}
            style={
              action === "Connect"
                ? styles.connectButton
                : styles.learnMoreButton
            }
          >
            {action}
          </button>
        ))}
      </div>
    </div>
  );
};

const styles = {
  container: {
    width: "100%",
    padding: "20px 18rem",
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
  cardContainer: {
    display: "flex",
    gap: "20px",
    flexWrap: "wrap",
    justifyContent: "flex-start",
  },
  card: {
    backgroundColor: "#fff",
    padding: "20px",
    borderRadius: "8px",
    width: "280px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
  },
  icon: {
    width: "40px",
    height: "40px",
    marginBottom: "10px",
  },
  cardContent: {
    flex: "1",
  },
  integrationName: {
    fontSize: "16px",
    fontWeight: "bold",
    color: "#333",
    textDecoration: "none",
    marginBottom: "5px",
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
  },
  externalLinkText: {
    fontSize: "10px",
    marginLeft: "5px",
    textDecoration: "underline",
    color: "#969a9e",
  },
  description: {
    fontSize: "14px",
    color: "#666",
    marginBottom: "10px",
  },
  installationNote: {
    fontSize: "12px",
    color: "#999",
    marginTop: "10px",
  },
  cardActions: {
    display: "flex",
    gap: "10px",
    marginTop: "15px",
  },
  learnMoreButton: {
    padding: "8px 16px",
    borderRadius: "4px",
    border: "1px solid #007bff",
    backgroundColor: "#fff",
    color: "#007bff",
    cursor: "pointer",
  },
  connectButton: {
    padding: "8px 16px",
    borderRadius: "4px",
    backgroundColor: "#007bff",
    color: "#fff",
    border: "none",
    cursor: "pointer",
  },
};

export default Integrations;
