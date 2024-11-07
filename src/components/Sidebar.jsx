import React from "react";
import { Link } from "react-router-dom";

const options = [
  { label: "Home", icon: "home", href: "/" },
  { label: "Settings", icon: "settings", href: "/settings" },
  { label: "Billing", icon: "credit_card", href: "/billing" },
  { label: "Projects", icon: "folder", href: "/projects" },
  { label: "Shipments", icon: "local_shipping", href: "/shipments" },
  // { label: "Integrations", icon: "apps", href: "/integrations" },
];

const Sidebar = () => {
  const [active, setActive] = React.useState(0);

  function handleItemClick(index) {
    setActive(index);
  }

  return (
    <nav style={styles.sidebar}>
      <div style={styles.logoContainer}>
        <img
          src="./images/logo.png" // Replace with the actual logo URL
          alt="Logo"
          style={styles.logo}
        />
      </div>
      <hr
        style={{ width: "100%", margin: "16px 0", border: "1px solid #f0f0f0" }}
      />
      <ul style={styles.navList}>
        {options.map((option, index) => (
          <Link to={option.href}>
            <li
              key={index}
              style={{
                ...styles.navItem,
                ...(active === index ? styles.active : {}),
              }}
              onClick={() => handleItemClick(index)}
            >
              <span className="material-symbols-rounded" style={styles.icon}>
                {option.icon}
              </span>
              <span>{option.label}</span>
            </li>
          </Link>
        ))}
      </ul>
    </nav>
  );
};

const styles = {
  sidebar: {
    minWidth: "100px",
    height: "100vh",
    backgroundColor: "#fff",
    display: "flex",
    position: "sticky",
    top: 0,
    flexDirection: "column",
    alignItems: "center",
    boxShadow: "1px 0 5px rgba(0, 0, 0, 0.1)",
    padding: "16px",
  },
  logoContainer: {
    // padding: "16px 0",
  },
  logo: {
    width: "40px",
    height: "40px",
  },
  navList: {
    listStyle: "none",
    padding: 0,
    margin: 0,
    flexGrow: 1,
  },
  navItem: {
    width: "100%",
    padding: "16px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    color: "#777",
    cursor: "pointer",
  },
  active: {
    backgroundColor: "#e0f0ff",
    color: "#1a73e8",
    borderRadius: "8px",
  },
  icon: {
    fontSize: "24px",
    marginBottom: "4px",
  },
};

export default Sidebar;
