import React, { useState } from "react";

const Settings = () => {
  const [activeTab, setActiveTab] = useState("general");

  const renderTabContent = () => {
    switch (activeTab) {
      case "general":
        return <GeneralSettings />;
      case "storeDetails":
        return <StoreDetails />;
      case "userSettings":
        return <UserSettings />;
      default:
        return null;
    }
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>Settings</h2>
      <div style={styles.tabs}>
        <button
          onClick={() => setActiveTab("general")}
          style={{
            ...styles.tab,
            borderBottom:
              activeTab === "general" ? "2px solid #007bff" : "none",
          }}
        >
          General Settings
        </button>
        <button
          onClick={() => setActiveTab("storeDetails")}
          style={{
            ...styles.tab,
            borderBottom:
              activeTab === "storeDetails" ? "2px solid #007bff" : "none",
          }}
        >
          Store Details
        </button>
        <button
          onClick={() => setActiveTab("userSettings")}
          style={{
            ...styles.tab,
            borderBottom:
              activeTab === "userSettings" ? "2px solid #007bff" : "none",
          }}
        >
          User Settings
        </button>
      </div>
      <div>{renderTabContent()}</div>
    </div>
  );
};

const ToggleSwitch = ({ checked, onChange }) => (
  <div
    onClick={onChange}
    style={{
      width: "40px",
      height: "20px",
      backgroundColor: checked ? "#007bff" : "#ccc",
      borderRadius: "20px",
      position: "relative",
      cursor: "pointer",
      display: "inline-block",
    }}
  >
    <div
      style={{
        width: "18px",
        height: "18px",
        backgroundColor: "#fff",
        borderRadius: "50%",
        position: "absolute",
        top: "1px",
        left: checked ? "20px" : "2px",
        transition: "left 0.2s",
      }}
    ></div>
  </div>
);

const GeneralSettings = () => {
  const [ecoCartEnabled, setEcoCartEnabled] = useState(true);
  const [widgetVisibility, setWidgetVisibility] = useState(true);

  return (
    <div style={styles.section}>
      <h3 style={styles.section.h3}>General Settings</h3>
      <p>Manage how you want Streak Ship to function</p>
      <div style={styles.switchContainer}>
        <label>Toggle calculations, offsets, and widgets on or off</label>
        <ToggleSwitch
          checked={ecoCartEnabled}
          onChange={() => setEcoCartEnabled(!ecoCartEnabled)}
        />
      </div>
      <div style={styles.switchContainer}>
        <label>Widget Visibility</label>
        <ToggleSwitch
          checked={widgetVisibility}
          onChange={() => setWidgetVisibility(!widgetVisibility)}
        />
      </div>

      <h3>Payor Modes</h3>
      <div style={styles.infoBox}>
        <p>Please contact Customer Support to change settings.</p>
        <button style={styles.contactButton}>Contact</button>
      </div>

      <h3>Payor Option</h3>
      <div style={styles.optionContainer}>
        <button style={styles.optionButton}>Customer Paying</button>
        <button style={{ ...styles.optionButton, backgroundColor: "#f5f5f5" }}>
          Merchant Paying
        </button>
      </div>

      <h3>Hybrid Option (optional)</h3>
      <div style={styles.optionContainer}>
        <button style={styles.optionButton}>None</button>
        <button style={{ ...styles.optionButton, backgroundColor: "#f5f5f5" }}>
          Merchant Matching
        </button>
      </div>

      <div style={styles.switchContainer}>
        <label>Auto Fulfillment</label>
        <input type="checkbox" defaultChecked />
      </div>
      <div style={styles.switchContainer}>
        <label>Delay Fulfillment</label>
        <input type="checkbox" />
      </div>
      <button style={styles.saveButton}>Save Changes</button>
    </div>
  );
};

const StoreDetails = () => (
  <div style={styles.section}>
    <h3 style={styles.section.h3}>Store Details</h3>
    <p>Edit your store information for your account</p>
    <label>Shop Name</label>
    <input
      type="text"
      defaultValue="18daab-b1.myshopify.com"
      style={styles.input}
    />
    <label>Company Name</label>
    <input
      type="text"
      defaultValue="Streak Ship's Customer"
      style={styles.input}
    />

    <h3>Mailing Address</h3>
    <label>Address 1</label>
    <input type="text" defaultValue="3 Lawn House Close" style={styles.input} />
    <label>Address 2</label>
    <input type="text" style={styles.input} />
    <label>City</label>
    <input type="text" defaultValue="London" style={styles.input} />
    <label>State/Province</label>
    <input type="text" defaultValue="Alabama" style={styles.input} />
    <label>Zip Code</label>
    <input type="text" defaultValue="E14 9YG" style={styles.input} />
    <button style={styles.saveButton}>Save Changes</button>
  </div>
);

const UserSettings = () => (
  <div style={styles.section}>
    <h3 style={styles.section.h3}>User Settings</h3>
    <p>Edit your information for your account</p>
    <label>Email</label>
    <input
      type="email"
      defaultValue="sales@asterselection.com"
      style={styles.input}
    />
    <label>First Name</label>
    <input type="text" defaultValue="Akshit" style={styles.input} />
    <label>Last Name</label>
    <input type="text" defaultValue="Kumar" style={styles.input} />
    <button style={styles.saveButton}>Save Changes</button>
  </div>
);

const styles = {
  container: {
    width: "100%",
    padding: "20px 12rem",
    fontFamily: "Arial, sans-serif",
    backgroundColor: "#f0f4f8",
  },
  title: {
    fontSize: "24px",
    fontWeight: "bold",
    marginBottom: "10px",
  },
  tabs: {
    display: "flex",
    gap: "10px",
    marginBottom: "20px",
  },
  tab: {
    padding: "10px",
    cursor: "pointer",
    borderBottom: "2px solid transparent",
  },
  section: {
    padding: "20px",
    backgroundColor: "#ffffff",
    borderRadius: "8px",
    h3: {
      fontSize: "20px",
      marginBottom: "10px",
      fontWeight: "bold",
    },
  },
  switchContainer: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    margin: "10px 0",
  },
  infoBox: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#e8f0fe",
    padding: "10px",
    borderRadius: "5px",
    marginBottom: "20px",
  },
  contactButton: {
    backgroundColor: "#007bff",
    color: "#fff",
    border: "none",
    padding: "5px 10px",
    cursor: "pointer",
    borderRadius: "4px",
  },
  optionContainer: {
    display: "flex",
    gap: "10px",
    marginBottom: "20px",
  },
  optionButton: {
    flex: 1,
    padding: "10px",
    border: "1px solid #ddd",
    borderRadius: "4px",
    cursor: "pointer",
  },
  input: {
    width: "100%",
    padding: "10px",
    marginBottom: "10px",
    borderRadius: "4px",
    border: "1px solid #ddd",
  },
  saveButton: {
    backgroundColor: "#007bff",
    color: "#fff",
    padding: "10px 20px",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
  },
};

export default Settings;
