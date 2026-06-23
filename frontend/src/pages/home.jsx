import { Link } from "react-router-dom";

function Home() {
  return (
    <div style={styles.page}>
      <div style={styles.hero}>
        <h1 style={styles.title}>
          Connect Clients & Freelancers Worldwide
        </h1>

        <p style={styles.subtitle}>
          FreelanceHub helps businesses find talented freelancers
          and empowers freelancers to discover exciting opportunities.
        </p>

        <div style={styles.buttonContainer}>
          <Link to="/login">
            <button style={styles.primaryBtn}>
              Get Started
            </button>
          </Link>

          <Link to="/projects">
            <button style={styles.secondaryBtn}>
              Explore Projects
            </button>
          </Link>
        </div>
      </div>

      <div style={styles.features}>
        <div style={styles.card}>
          <h3>💼 Post Projects</h3>
          <p>
            Clients can create projects and receive proposals from
            skilled freelancers.
          </p>
        </div>

        <div style={styles.card}>
          <h3>🚀 Find Opportunities</h3>
          <p>
            Freelancers can browse projects and apply with ease.
          </p>
        </div>

        <div style={styles.card}>
          <h3>🤝 Collaborate</h3>
          <p>
            Manage projects, communicate, and build long-term
            professional relationships.
          </p>
        </div>
      </div>
    </div>
  );
}

const styles = {
  page: {
    minHeight: "100vh",
    background:
      "linear-gradient(to bottom, #e0f7ff, #ffffff)",
    padding: "40px",
  },

  hero: {
    textAlign: "center",
    marginTop: "80px",
    marginBottom: "80px",
  },

  title: {
    fontSize: "48px",
    color: "#0f172a",
    marginBottom: "20px",
  },

  subtitle: {
    fontSize: "20px",
    color: "#475569",
    maxWidth: "700px",
    margin: "0 auto",
    lineHeight: "1.6",
  },

  buttonContainer: {
    marginTop: "35px",
    display: "flex",
    justifyContent: "center",
    gap: "15px",
  },

  primaryBtn: {
    backgroundColor: "#38bdf8",
    color: "white",
    border: "none",
    padding: "14px 28px",
    borderRadius: "8px",
    cursor: "pointer",
    fontSize: "16px",
    fontWeight: "bold",
  },

  secondaryBtn: {
    backgroundColor: "white",
    color: "#0284c7",
    border: "2px solid #38bdf8",
    padding: "14px 28px",
    borderRadius: "8px",
    cursor: "pointer",
    fontSize: "16px",
    fontWeight: "bold",
  },

  features: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
    gap: "25px",
    maxWidth: "1100px",
    margin: "0 auto",
  },

  card: {
    backgroundColor: "white",
    padding: "25px",
    borderRadius: "15px",
    boxShadow: "0 4px 15px rgba(0,0,0,0.08)",
    textAlign: "center",
  },
};

export default Home;