import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const Home = () => {
  const data = [
    { name: "Jan 2024", value: 0 },
    { name: "Feb 2024", value: 0 },
    { name: "Mar 2024", value: 0 },
    { name: "Jun 2024", value: 0 },
    // Continue to add data points as needed
  ];

  return (
    <div style={styles.container}>
      <header style={styles.header}>
        <h1 style={styles.header?.h1}>Welcome back, Akshit Kumar!</h1>
        <h2 style={styles.header?.h2}>
          To date, Ariadné has offset <span style={styles.highlight}>0 lb</span>{" "}
          of carbon dioxide (CO₂) across{" "}
          <span style={styles.highlight}>0 orders</span>
        </h2>

        <section style={styles.offsetSection}>
          <h3>Which is similar to offsetting:</h3>
          <div style={styles.cardsContainer}>
            {[
              { icon: "directions_car", label: "Miles Driven" },
              { icon: "battery_charging_full", label: "Electricity Use" },
              { icon: "smartphone", label: "Smartphones Charged" },
              { icon: "eco", label: "Tree Seedlings" },
              { icon: "landscape", label: "Acres of Forest" },
              { icon: "energy", label: "Wind Turbines" },
            ].map((label, index) => (
              <div key={index} style={styles.card}>
                <span
                  className="material-symbols-rounded"
                  style={styles.cardIcon}
                >
                  {label.icon}
                </span>

                {/* Replace with actual icons */}
                <h4 style={styles.card.h4}>N/A</h4>
                <p style={styles.card.p}>{label.label}</p>
                <span
                  className="material-symbols-rounded"
                  style={styles.card.infoIcon}
                >
                  info
                </span>
              </div>
            ))}
          </div>
        </section>
      </header>

      <section style={styles.journeySection}>
        <h3>Your Sustainability Journey</h3>
        <div style={styles.statsContainer}>
          <div style={styles.statBox}>
            <p>Carbon Offset in lb</p>
            <h4 style={styles.statBox.h4}>0</h4>
          </div>
          <div style={styles.statBox}>
            <p>Contributions</p>
            <h4 style={styles.statBox.h4}>$0.00</h4>
          </div>
          <div style={styles.statBox}>
            <p>Total Offset Orders</p>
            <h4 style={styles.statBox.h4}>0</h4>
          </div>
          <div style={styles.statBox}>
            <p>Avg Offset in lb</p>
            <h4 style={styles.statBox.h4}>0.00</h4>
          </div>
        </div>
      </section>

      <section style={styles.chartSection}>
        <h3>StreakShip Performance</h3>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={data}>
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Line
              type="monotone"
              dataKey="value"
              stroke="#00C853"
              dot={false}
            />
          </LineChart>
        </ResponsiveContainer>
      </section>

      <section style={styles.projectFundingSection}>
        <h3 style={styles.projectFundingSection.h3}>Project Funding</h3>
        <div style={styles.projectBox}>
          <p>See where your contributions have gone</p>
          <div style={styles.project}>
            <img
              style={styles.project.img}
              src="./images/forest.png"
              alt="Forest"
            />
            <div>
              <h4 style={styles.project.h4}>Global Forestry Projects</h4>
              <p>Global</p>
            </div>
            <div style={styles.projectTags}>
              <span style={styles.tag}>REDD+</span>
              <span style={styles.tag}>Verified Carbon Standard</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

const styles = {
  container: {
    width: "100%",
    // padding: "20px",
    backgroundColor: "#f0f4f8",
  },
  header: {
    // textAlign: "center",
    marginBottom: "20px",
    color: "#fff",
    backgroundColor: "#0b1b3d",
    padding: "4rem 18rem",
    // borderRadius: "8px",
    h2: {
      fontSize: "3rem",
      marginBottom: "2rem",
    },
    h1: {
      fontSize: "2rem",
      marginBottom: "2rem",
    },
  },
  highlight: {
    color: "#00C853",
  },
  offsetSection: {
    // marginBottom: "20px",
  },
  cardsContainer: {
    display: "flex",
    justifyContent: "space-between",
    flexWrap: "wrap",
  },
  card: {
    backgroundColor: "#1c2a4c",
    color: "#fff",
    padding: "15px",
    // margin: "10px",
    width: "180px",
    // textAlign: "center",
    borderRadius: "15px",
    h4: {
      fontSize: "1.5rem",
      // marginBottom: "1rem",
    },
    p: {
      fontSize: "0.8rem",
    },
    infoIcon: {
      marginTop: "1rem",
      fontSize: "1rem",
    },
  },
  cardIcon: {
    color: "#00C853",
    padding: "8px",
    backgroundColor: "#344672",
    fontSize: "24px",
    borderRadius: "5px",
  },
  journeySection: {
    // marginBottom: "20px",
    padding: "0 18rem",
  },
  statsContainer: {
    display: "grid",
    gridTemplateColumns: "repeat(4, 1fr)",
    justifyContent: "space-around",
    gap: "20px",
    flexWrap: "wrap",
    padding: "10px 0",
  },
  statBox: {
    backgroundColor: "#fff",
    padding: "20px",
    // margin: "10px",
    // width: "150px",
    // textAlign: "center",
    borderRadius: "15px",
    // boxShadow: "0 0 5px rgba(0,0,0,0.05)",
    h4: {
      fontSize: "2rem",
    },
  },
  chartSection: {
    margin: "20px 18rem",
    padding: "20px",
    backgroundColor: "#fff",
    borderRadius: "15px",
    // boxShadow: "0 0 5px rgba(0,0,0,0.1)",
  },
  projectFundingSection: {
    margin: "20px 18rem",
    padding: "20px",
    backgroundColor: "#fff",
    borderRadius: "15px",
    // boxShadow: "0 0 5px rgba(0,0,0,0.1)",
    h3: {
      fontSize: "1.3rem",
    },
  },
  projectBox: {
    // textAlign: "center",
    fontSize: "0.8rem",
    color: "#777",
    display: "flex",
    flexDirection: "column",
    gap: "20px",
  },
  project: {
    // padding: "20px",
    // margin: "10px",
    // width: "150px",
    // textAlign: "center",
    display: "flex",
    borderRadius: "15px",
    gap: "20px",
    // boxShadow: "0 0 5px rgba(0,0,0,0.05)",
    img: {
      width: "50px",
      height: "50px",
      borderRadius: "15px",
    },
    h4: {
      fontSize: "1rem",
      color: "#2d5eff",
      fontWeight: "bold",
    },
  },
  projectTags: {
    display: "flex",
    justifyContent: "center",
    gap: "10px",
    marginTop: "10px",
  },
  tag: {
    padding: "5px 10px",
    display: "flex",
    // make itself go to flex end
    // marginLeft: "auto",
    justifySelf: "end",
    alignItems: "center",
    backgroundColor: "#00C853",
    color: "#fff",
    borderRadius: "40px",
    fontSize: "12px",
  },
};

export default Home;
