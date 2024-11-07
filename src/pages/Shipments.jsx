import React, { useState, useMemo } from "react";

// Dummy data for initial setup, replace it or load it dynamically
const initialData = [
  {
    trackingNo: "YT24312121272261590",
    orderInfo: "AS1132",
    carbonOffset: "12 lbs",
    status: "Info received",
    latestEvent: "7 Nov, 2024 17:47:17, Shipment information received",
    inputTime: "7 Nov, 2024 15:31:18",
    transitTime: "1 Days",
    estimatedDelivery: "--",
  },
  {
    trackingNo: "YT24312121266067770",
    orderInfo: "AS1130",
    carbonOffset: "18 lbs",
    status: "Info received",
    latestEvent: "7 Nov, 2024 17:46:56, Shipment information received",
    inputTime: "7 Nov, 2024 15:31:15",
    transitTime: "1 Days",
    estimatedDelivery: "--",
  },
  {
    trackingNo: "YT24312121266067797",
    orderInfo: "AS1129",
    carbonOffset: "5 lbs",
    status: "Info received",
    latestEvent: "7 Nov, 2024 17:43:48, Shipment information received",
    inputTime: "7 Nov, 2024 15:31:11",
    transitTime: "1 Days",
    estimatedDelivery: "--",
  },
  {
    trackingNo: "YT24312121266067396",
    orderInfo: "AS1126",
    carbonOffset: "7 lbs",
    status: "Info received",
    latestEvent: "7 Nov, 2024 17:43:48, Shipment information received",
    inputTime: "7 Nov, 2024 15:31:03",
    transitTime: "1 Days",
    estimatedDelivery: "--",
  },
  {
    trackingNo: "YT24312121266067394",
    orderInfo: "AS1127",
    carbonOffset: "20 lbs",
    status: "Not found",
    latestEvent: "Waiting for carrier to update tracking info.",
    inputTime: "7 Nov, 2024 15:30:56",
    transitTime: "--",
    estimatedDelivery: "--",
  },
  {
    trackingNo: "YT24312121266067398",
    orderInfo: "AS1134",
    carbonOffset: "14 lbs",
    status: "Info received",
    latestEvent: "7 Nov, 2024 17:43:48, Shipment information received",
    inputTime: "7 Nov, 2024 15:30:43",
    transitTime: "1 Days",
    estimatedDelivery: "--",
  },
  {
    trackingNo: "YT24312121266050253",
    orderInfo: "AS1080",
    carbonOffset: "9 lbs",
    status: "Info received",
    latestEvent: "7 Nov, 2024 14:55:28, Shipment information received",
    inputTime: "7 Nov, 2024 13:20:32",
    transitTime: "1 Days",
    estimatedDelivery: "--",
  },
  {
    trackingNo: "YT24312121266050253",
    orderInfo: "AS1080",
    carbonOffset: "11 lbs",
    status: "Info received",
    latestEvent: "7 Nov, 2024 14:55:28, Shipment information received",
    inputTime: "7 Nov, 2024 13:20:32",
    transitTime: "1 Days",
    estimatedDelivery: "--",
  },
  {
    trackingNo: "YT24312121266050253",
    orderInfo: "AS1133",
    carbonOffset: "22 lbs",
    status: "Info received",
    latestEvent: "7 Nov, 2024 15:24:00, Shipment information received",
    inputTime: "7 Nov, 2024 12:56:07",
    transitTime: "1 Days",
    estimatedDelivery: "--",
  },
  {
    trackingNo: "YT24312121266050253",
    orderInfo: "AS1133",
    carbonOffset: "3 lbs",
    status: "Info received",
    latestEvent: "7 Nov, 2024 15:21:22, Shipment information received",
    inputTime: "7 Nov, 2024 12:56:02",
    transitTime: "1 Days",
    estimatedDelivery: "--",
  },
  {
    trackingNo: "YT24312121266050253",
    orderInfo: "AS1136",
    carbonOffset: "16 lbs",
    status: "Info received",
    latestEvent: "7 Nov, 2024 15:21:13, Shipment information received",
    inputTime: "7 Nov, 2024 12:56:01",
    transitTime: "1 Days",
    estimatedDelivery: "--",
  },
  {
    trackingNo: "YT24312121266050253",
    orderInfo: "AS1131",
    carbonOffset: "26 lbs",
    status: "Info received",
    latestEvent: "7 Nov, 2024 15:15:18, Shipment information received",
    inputTime: "7 Nov, 2024 12:55:57",
    transitTime: "1 Days",
    estimatedDelivery: "--",
  },
  {
    trackingNo: "YT24312121266050253",
    orderInfo: "AS1125",
    carbonOffset: "24 lbs",
    status: "Info received",
    latestEvent: "7 Nov, 2024 15:15:18, Shipment information received",
    inputTime: "7 Nov, 2024 12:55:55",
    transitTime: "1 Days",
    estimatedDelivery: "--",
  },
  {
    trackingNo: "YT24312121266050253",
    orderInfo: "AS1124",
    carbonOffset: "15 lbs",
    status: "Info received",
    latestEvent: "7 Nov, 2024 15:12:23, Shipment information received",
    inputTime: "7 Nov, 2024 12:56:11",
    transitTime: "1 Days",
    estimatedDelivery: "--",
  },
  {
    trackingNo: "YT24312121266050253",
    orderInfo: "AS1138",
    carbonOffset: "30 lbs",
    status: "Not found",
    latestEvent: "Waiting for carrier to update tracking info.",
    inputTime: "7 Nov, 2024 13:20:31",
    transitTime: "--",
    estimatedDelivery: "--",
  },
];

// Column configurations for flexibility
const columnsConfig = [
  { label: "Tracking No.", accessor: "trackingNo" },
  { label: "Order Info", accessor: "orderInfo" },
  { label: "Carbon Offset", accessor: "carbonOffset" },
  { label: "Status", accessor: "status" },
  { label: "Latest Event", accessor: "latestEvent" },
  { label: "Input Time", accessor: "inputTime" },
  { label: "Transit Time", accessor: "transitTime" },
  { label: "Estimated Delivery", accessor: "estimatedDelivery" },
];

const filterColumn = "status";

const Shipments = () => {
  const [data, setData] = useState(initialData);
  const [filters, setFilters] = useState({ column: filterColumn, value: "" });
  const [searchQuery, setSearchQuery] = useState("");

  // Dynamic filter options based on filter column
  const filterOptions = useMemo(() => {
    const uniqueValues = [...new Set(data.map((item) => item[filterColumn]))];
    return uniqueValues;
  }, [data]);

  // Filtered data based on the search query and selected filter
  const filteredData = useMemo(() => {
    let filtered = data;

    // Apply search query
    if (searchQuery) {
      filtered = filtered.filter((item) =>
        Object.values(item).some((val) =>
          val.toLowerCase().includes(searchQuery.toLowerCase())
        )
      );
    }

    // Apply selected filter
    if (filters.value) {
      filtered = filtered.filter(
        (item) => item[filters.column] === filters.value
      );
    }

    return filtered;
  }, [data, filters, searchQuery]);

  const handleFilterChange = (value) => {
    setFilters({ column: filterColumn, value });
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>Shipments</h2>

      <div style={styles.filtersContainer}>
        <button
          onClick={() => handleFilterChange("")}
          style={{
            ...styles.filterButton,
            backgroundColor: filters.value === "" ? "#007bff" : "#f5f5f5",
            color: filters.value === "" ? "#fff" : "#333",
          }}
        >
          All
        </button>
        {filterOptions.map((option) => (
          <button
            key={option}
            onClick={() => handleFilterChange(option)}
            style={{
              ...styles.filterButton,
              backgroundColor: filters.value === option ? "#007bff" : "#f5f5f5",
              color: filters.value === option ? "#fff" : "#333",
            }}
          >
            {option}
          </button>
        ))}
      </div>

      <input
        type="text"
        placeholder="Order, tracking number or email..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        style={styles.searchBox}
      />

      <table style={styles.table}>
        <thead>
          <tr>
            {columnsConfig.map((col) => (
              <th key={col.accessor} style={styles.tableHeader}>
                {col.label}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {filteredData.map((row, rowIndex) => (
            <tr key={rowIndex} style={styles.tableRow}>
              {columnsConfig.map((col) => (
                <td key={col.accessor} style={styles.tableCell}>
                  {row[col.accessor]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

const styles = {
  container: {
    width: "100%",
    padding: "20px 6rem",
    fontFamily: "Arial, sans-serif",
    color: "#333",
    backgroundColor: "#f0f4f8",
  },
  title: {
    fontSize: "24px",
    fontWeight: "bold",
    marginBottom: "20px",
  },
  filtersContainer: {
    display: "flex",
    gap: "10px",
    marginBottom: "10px",
  },
  filterButton: {
    padding: "8px 12px",
    borderRadius: "4px",
    border: "1px solid #ddd",
    cursor: "pointer",
    fontSize: "14px",
    transition: "background-color 0.3s, color 0.3s",
  },
  searchBox: {
    width: "100%",
    padding: "10px",
    borderRadius: "4px",
    border: "1px solid #ddd",
    marginBottom: "20px",
  },
  table: {
    width: "100%",
    borderCollapse: "collapse",
    backgroundColor: "#fff",
  },
  tableHeader: {
    padding: "10px",
    textAlign: "left",
    fontWeight: "bold",
    backgroundColor: "#f5f5f5",
    borderBottom: "2px solid #ddd",
  },
  tableRow: {
    borderBottom: "1px solid #ddd",
  },
  tableCell: {
    padding: "10px",
    textAlign: "left",
  },
};

export default Shipments;
