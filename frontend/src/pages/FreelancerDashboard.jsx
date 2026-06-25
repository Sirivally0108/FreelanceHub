import { useEffect, useState } from "react";
import axios from "axios";

function FreelancerDashboard() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/projects")
      .then((res) => setProjects(res.data.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div style={styles.page}>
      <div style={styles.hero}>
        <div>
          <h1>🚀 Freelancer Dashboard</h1>
          <p>Track applications and earnings.</p>
        </div>

        <button
          style={styles.heroBtn}
          onClick={() => (window.location.href = "/projects")}
        >
          Browse Projects
        </button>
      </div>

      <div style={styles.stats}>
        <div style={styles.card}>
          <h2>4</h2>
          <p>Applied Projects</p>
        </div>

        <div style={styles.card}>
          <h2>2</h2>
          <p>Completed</p>
        </div>

        <div style={styles.card}>
          <h2>4.8 ⭐</h2>
          <p>Rating</p>
        </div>

        <div style={styles.card}>
          <h2>₹50,000</h2>
          <p>Earnings</p>
        </div>
      </div>

      <h2>Recommended Projects</h2>

      <div style={styles.projectGrid}>
        {projects.map((project) => (
          <div key={project.project_id} style={styles.projectCard}>
            <h3>{project.title}</h3>

            <p>{project.description}</p>

            <p>
              <strong>Budget:</strong> ₹{project.budget}
            </p>

            <button
              style={styles.button}
              onClick={() => alert("Application Submitted")}
            >
              Apply
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

const styles = {
  page: {
    padding: "30px",
    minHeight: "100vh",
    background: "#f0f9ff"
  },

  hero: {
    background: "linear-gradient(135deg,#0ea5e9,#38bdf8)",
    color: "white",
    padding: "30px",
    borderRadius: "20px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center"
  },

  heroBtn: {
    padding: "12px 20px",
    border: "none",
    borderRadius: "10px",
    cursor: "pointer"
  },

  stats: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit,minmax(200px,1fr))",
    gap: "20px",
    marginTop: "25px"
  },

  card: {
    background: "white",
    padding: "20px",
    borderRadius: "15px",
    textAlign: "center"
  },

  projectGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit,minmax(250px,1fr))",
    gap: "20px",
    marginTop: "20px"
  },

  projectCard: {
    background: "white",
    padding: "20px",
    borderRadius: "15px"
  },

  button: {
    padding: "10px",
    border: "none",
    background: "#0284c7",
    color: "white",
    borderRadius: "8px",
    cursor: "pointer"
  }
};

export default FreelancerDashboard;