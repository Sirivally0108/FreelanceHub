function FreelancerDashboard() {
  return (
    <div style={styles.page}>
      {/* Hero Section */}
      <div style={styles.hero}>
        <div>
          <h1 style={styles.heading}>Welcome Back 🚀</h1>
          <p style={styles.subheading}>
            Discover opportunities, showcase your skills, and grow your freelance career.
          </p>
        </div>

        <button style={styles.heroButton}>
          Browse Projects
        </button>
      </div>

      {/* Stats */}
      <h2 style={styles.sectionTitle}>My Performance</h2>

      <div style={styles.statsGrid}>
        <div style={styles.statCard}>
          <h3>📩</h3>
          <h2>25</h2>
          <p>Applications Sent</p>
        </div>

        <div style={styles.statCard}>
          <h3>✅</h3>
          <h2>7</h2>
          <p>Projects Won</p>
        </div>

        <div style={styles.statCard}>
          <h3>⭐</h3>
          <h2>4.8</h2>
          <p>Client Rating</p>
        </div>

        <div style={styles.statCard}>
          <h3>💰</h3>
          <h2>₹35K</h2>
          <p>Total Earnings</p>
        </div>
      </div>

      {/* Quick Actions */}
      <h2 style={styles.sectionTitle}>Quick Actions</h2>

      <div style={styles.actionGrid}>
        <div style={styles.actionCard}>🔎 Browse Projects</div>
        <div style={styles.actionCard}>📩 My Applications</div>
        <div style={styles.actionCard}>👤 My Profile</div>
        <div style={styles.actionCard}>💼 Portfolio</div>
        <div style={styles.actionCard}>📝 Submit Proposal</div>
        <div style={styles.actionCard}>📅 My Tasks</div>
        <div style={styles.actionCard}>💬 Messages</div>
        <div style={styles.actionCard}>🏆 Certificates</div>
      </div>

      {/* Skills Section */}
      <h2 style={styles.sectionTitle}>Top Skills</h2>

      <div style={styles.skillsContainer}>
        <span style={styles.skill}>React</span>
        <span style={styles.skill}>JavaScript</span>
        <span style={styles.skill}>Python</span>
        <span style={styles.skill}>UI/UX</span>
        <span style={styles.skill}>Node.js</span>
      </div>

      {/* Recommended Projects */}
      <h2 style={styles.sectionTitle}>Recommended Projects</h2>

      <div style={styles.projectGrid}>
        <div style={styles.projectCard}>
          <h3>React Developer Needed</h3>
          <p>Budget: ₹15,000</p>
          <button style={styles.applyBtn}>Apply Now</button>
        </div>

        <div style={styles.projectCard}>
          <h3>Portfolio Website</h3>
          <p>Budget: ₹8,000</p>
          <button style={styles.applyBtn}>Apply Now</button>
        </div>

        <div style={styles.projectCard}>
          <h3>Python Automation Tool</h3>
          <p>Budget: ₹20,000</p>
          <button style={styles.applyBtn}>Apply Now</button>
        </div>
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
    marginTop: "30px",
    marginBottom: "15px",
  },

  statsGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
    gap: "20px",
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
    boxShadow: "0 4px 15px rgba(0,0,0,0.08)",
    cursor: "pointer",
  },

  skillsContainer: {
    display: "flex",
    flexWrap: "wrap",
    gap: "10px",
  },

  skill: {
    backgroundColor: "#38bdf8",
    color: "white",
    padding: "8px 15px",
    borderRadius: "20px",
  },

  projectGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
    gap: "20px",
  },

  projectCard: {
    backgroundColor: "white",
    padding: "20px",
    borderRadius: "15px",
    boxShadow: "0 4px 15px rgba(0,0,0,0.08)",
  },

  applyBtn: {
    backgroundColor: "#0ea5e9",
    color: "white",
    border: "none",
    padding: "10px 15px",
    borderRadius: "8px",
    cursor: "pointer",
  },
};

export default FreelancerDashboard;