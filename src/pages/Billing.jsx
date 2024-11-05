import React, { useState } from "react";

const billingHistory = [
  {
    amount: (Math.random() * 30).toFixed(2),
    invoice: "3cafa5a8-14a0-4404-af2a-cee300821a50",
    period: "Oct 01, 24 - Oct 31, 24",
    status: "Paid",
  },
  {
    amount: (Math.random() * 30).toFixed(2),
    invoice: "34030776-50c2-47ae-b396-1b5f58cd71e9",
    period: "Sep 01, 24 - Sep 30, 24",
    status: "Paid",
  },
  {
    amount: (Math.random() * 30).toFixed(2),
    invoice: "65c4633e-c740-482e-a6c4-54c0f6094000",
    period: "Aug 01, 24 - Aug 31, 24",
    status: "Paid",
  },
  {
    amount: (Math.random() * 30).toFixed(2),
    invoice: "8366df56-866b-41d6-a56e-6ed11ee99b10",
    period: "Jul 01, 24 - Jul 31, 24",
    status: "Paid",
  },
  // Add more records here for pagination testing
];
const Billing = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(4); // Set items per page

  // Calculate the total pages
  const totalPages = Math.ceil(billingHistory.length / itemsPerPage);

  // Get the items to display for the current page
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentItems = billingHistory.slice(
    startIndex,
    startIndex + itemsPerPage
  );

  // Handle page navigation
  const goToPreviousPage = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
  };

  const goToNextPage = () => {
    setCurrentPage((prevPage) => Math.min(prevPage + 1, totalPages));
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>Billing</h2>
      <p style={styles.period}>
        Current billing period: Oct 01, 2024 - Oct 31, 2024
      </p>
      <p style={styles.nextInvoice}>Next invoice date: Nov 01, 2024</p>

      <div style={styles.summaryContainer}>
        <SummaryCard
          title="Total Amount Due"
          amount={`$${(Math.random() * 20).toFixed(2)}`}
        />
        <SummaryCard
          title="Offset Orders"
          amount={(Math.random() * 100).toFixed(0)}
        />
        <SummaryCard title="Merchant Fees" amount="$0.00" />
        <SummaryCard title="Customer Fees" amount="$0.00" />
      </div>

      <section style={styles.billingHistory}>
        <h3 style={styles.sectionTitle}>Billing History</h3>
        <p style={styles.sectionSubtitle}>View and export your transactions</p>
        <input type="text" placeholder="Search..." style={styles.searchBox} />

        <table style={styles.table}>
          <thead style={styles.tableHeader}>
            <tr>
              <th>Amount</th>
              <th>Invoice Number</th>
              <th>Billing Period</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {currentItems.map((record, index) => (
              <>
                <tr style={styles.tableRow} key={index}>
                  <td>{record.amount}</td>
                  <td>{record.invoice}</td>
                  <td>{record.period}</td>
                  <td>
                    <span style={styles.statusPaid}>{record.status}</span>
                  </td>
                  <td>--</td>
                </tr>
              </>
            ))}
          </tbody>
        </table>

        {/* Pagination Controls */}
        <div style={styles.pagination}>
          <button
            onClick={goToPreviousPage}
            disabled={currentPage === 1}
            style={styles.pageButton}
          >
            &lt;
          </button>
          <span>
            {currentPage} / {totalPages}
          </span>
          <button
            onClick={goToNextPage}
            disabled={currentPage === totalPages}
            style={styles.pageButton}
          >
            &gt;
          </button>
        </div>
      </section>

      <section style={styles.paymentMethod}>
        <h3 style={styles.sectionTitle}>Payment Method</h3>
        <p style={styles.sectionSubtitle}>Change how you pay</p>
        <div style={styles.paymentContainer}>
          <div style={styles.paymentDetails}>
            <img
              src="./icons/shopify.svg"
              alt="Shopify"
              style={styles.paymentIcon}
            />
            <div>
              <p style={styles.paymentType}>Shopify</p>
              <p style={styles.paymentDescription}>
                StreakShip Recurring Charge
              </p>
            </div>
            <span style={styles.tag}>Primary</span>
          </div>
          {/* <button style={styles.editButton}>Edit</button> */}
        </div>
      </section>
    </div>
  );
};

const SummaryCard = ({ title, amount }) => (
  <div style={styles.summaryCard}>
    <p style={styles.cardTitle}>{title}</p>
    <h4 style={styles.cardAmount}>{amount}</h4>
  </div>
);

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
  period: {
    fontSize: "14px",
    color: "#666",
  },
  nextInvoice: {
    fontSize: "14px",
    color: "#666",
    marginBottom: "30px",
  },
  summaryContainer: {
    display: "flex",
    justifyContent: "space-between",
    marginBottom: "30px",
  },
  summaryCard: {
    backgroundColor: "#fff",
    padding: "20px",
    borderRadius: "8px",
    width: "22%",
  },
  cardTitle: {
    fontSize: "14px",
    color: "#666",
  },
  cardAmount: {
    fontSize: "24px",
    fontWeight: "bold",
    color: "#333",
  },
  billingHistory: {
    backgroundColor: "#fff",
    padding: "20px",
    borderRadius: "8px",
    marginBottom: "30px",
  },
  sectionTitle: {
    fontSize: "18px",
    fontWeight: "bold",
    marginBottom: "10px",
  },
  sectionSubtitle: {
    fontSize: "14px",
    color: "#666",
    marginBottom: "20px",
  },
  searchBox: {
    width: "100%",
    padding: "10px",
    marginBottom: "20px",
    borderRadius: "4px",
    border: "1px solid #ddd",
  },
  table: {
    width: "100%",
    borderCollapse: "separate",
    borderSpacing: "0 10px",
    textAlign: "center",
  },
  tableHeader: {
    fontSize: "14px",
    color: "#666",
    backgroundColor: "#f5f7fa",
  },
  tableRow: {
    borderBottom: "1px solid #eee",
  },
  statusPaid: {
    backgroundColor: "#00C853",
    color: "#fff",
    padding: "4px 8px",
    borderRadius: "20px",
    fontSize: "12px",
  },
  pagination: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginTop: "20px",
    gap: "10px",
  },
  pageButton: {
    padding: "5px 10px",
    borderRadius: "4px",
    border: "1px solid #ddd",
    borderColor: "#007bff",
    // color: "#fff",
    cursor: "pointer",
    fontSize: "14px",
  },
  paymentMethod: {
    backgroundColor: "#fff",
    padding: "20px",
    borderRadius: "8px",
  },
  paymentContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: "20px",
  },
  paymentDetails: {
    display: "flex",
    alignItems: "center",
  },
  paymentIcon: {
    marginRight: "10px",
    width: "40px",
  },
  paymentType: {
    fontSize: "14px",
    fontWeight: "bold",
  },
  paymentDescription: {
    fontSize: "12px",
    color: "#666",
  },
  tag: {
    backgroundColor: "#00C853",
    color: "#fff",
    padding: "4px 8px",
    borderRadius: "20px",
    fontSize: "12px",
    marginLeft: "10px",
  },
  editButton: {
    backgroundColor: "#007bff",
    color: "#fff",
    padding: "8px 16px",
    borderRadius: "4px",
    border: "none",
    cursor: "pointer",
  },
};

export default Billing;
