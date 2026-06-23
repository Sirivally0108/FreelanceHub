function ClientDashboard() {
  return (
    <div style={styles.page}>
      {/* Hero Section */}
      <div style={styles.hero}>
        <div>
          <h1 style={styles.heading}>Welcome Back 👋</h1>
          <p style={styles.subheading}>
            Manage projects, hire freelancers, and track progress efficiently.
          </p>
        </div>

        <button style={styles.heroButton}>
          + Post New Project
        </button>
      </div>

      {/* Stats Cards */}
      <h2 style={styles.sectionTitle}>Dashboard Overview</h2>

      <div style={styles.statsGrid}>
        <div style={styles.statCard}>
          <h3>📌</h3>
          <h2>12</h2>
          <p>Projects Posted</p>
        </div>

        <div style={styles.statCard}>
          <h3>📨</h3>
          <h2>28</h2>
          <p>Proposals Received</p>
        </div>

        <div style={styles.statCard}>
          <h3>👨‍💻</h3>
          <h2>6</h2>
          <p>Hired Freelancers</p>
        </div>

        <div style={styles.statCard}>
          <h3>💰</h3>
          <h2>₹75K</h2>
          <p>Total Budget</p>
        </div>
      </div>

      {/* Quick Actions */}
      <h2 style={styles.sectionTitle}>Quick Actions</h2>

      <div style={styles.actionGrid}>
        <div style={styles.actionCard}>📌 Post Project</div>
        <div style={styles.actionCard}>👥 Manage Freelancers</div>
        <div style={styles.actionCard}>📊 Track Progress</div>
        <div style={styles.actionCard}>💬 Messages</div>
        <div style={styles.actionCard}>📁 Project Files</div>
        <div style={styles.actionCard}>⭐ Reviews</div>
        <div style={styles.actionCard}>📈 Reports</div>
        <div style={styles.actionCard}>🔔 Notifications</div>
      </div>
    </div>
  );
}

const styles = {
  page: {
    minHeight: "100vh",
    backgroundColor: "#f0f9ff",
    padding: "30px",
  },

  hero: {
    background: "linear-gradient(135deg, #38bdf8, #0ea5e9)",
    color: "white",
    padding: "35px",
    borderRadius: "20px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: "35px",
    boxShadow: "0 8px 25px rgba(0,0,0,0.15)",
  },

  heading: {
    margin: 0,
    fontSize: "32px",
  },

  subheading: {
    marginTop: "10px",
    fontSize: "16px",
  },

  heroButton: {
    backgroundColor: "white",
    color: "#0284c7",
    border: "none",
    padding: "12px 20px",
    borderRadius: "10px",
    cursor: "pointer",
    fontWeight: "bold",
  },

  sectionTitle: {
    color: "#0f172a",
    marginBottom: "15px",
  },

  statsGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
    gap: "20px",
    marginBottom: "40px",
  },

  statCard: {
    backgroundColor: "white",
    borderRadius: "15px",
    padding: "20px",
    textAlign: "center",
    boxShadow: "0 4px 15px rgba(0,0,0,0.08)",
  },

  actionGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
    gap: "20px",
  },

  actionCard: {
    backgroundColor: "white",
    padding: "25px",
    borderRadius: "15px",
    textAlign: "center",
    fontWeight: "bold",
    cursor: "pointer",
    boxShadow: "0 4px 15px rgba(0,0,0,0.08)",
    transition: "0.3s",
  },
};

export default ClientDashboard;