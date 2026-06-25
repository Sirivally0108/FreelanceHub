import { useEffect, useState } from "react";
import axios from "axios";

function ClientDashboard() {
  const [projects, setProjects] = useState([]);
  const [proposals, setProposals] = useState([]);

  useEffect(() => {

    axios
      .get("http://localhost:5000/api/projects")
      .then((res) => setProjects(res.data.data))
      .catch((err) => console.log(err));

    axios
      .get("http://localhost:5000/api/proposals/project/1")
      .then((res) => setProposals(res.data.data))
      .catch((err) => console.log(err));

  }, []);

  return (
    <div style={styles.page}>
      {/* Hero */}
      <div style={styles.hero}>
        <div>
          <h1>👨‍💼 Client Dashboard</h1>
          <p>Manage projects, hire freelancers and track progress.</p>
        </div>

        <button
          style={styles.postBtn}
          onClick={() => (window.location.href = "/post-project")}
        >
          ➕ Post Project
        </button>
      </div>

      {/* Stats */}
      <div style={styles.stats}>
        <div style={styles.card}>
          <h2>{projects.length}</h2>
          <p>Projects Posted</p>
        </div>

        <div style={styles.card}>
          <h2>{proposals.length}</h2>
          <p>Proposals Received</p>
        </div>

        <div style={styles.card}>
          <h2>4</h2>
          <p>Freelancers Hired</p>
        </div>

        <div style={styles.card}>
          <h2>12</h2>
          <p>Messages</p>
        </div>
      </div>

      {/* Quick Actions */}
      <h2 style={styles.title}>Quick Actions</h2>

      <div style={styles.quickGrid}>
        <button
          style={styles.actionBtn}
          onClick={() => (window.location.href = "/post-project")}
        >
          ➕ Post Project
        </button>

        <button
          style={styles.actionBtn}
          onClick={() => (window.location.href = "/my-projects")}
        >
          📂 My Projects
        </button>

        <button
          style={styles.actionBtn}
          onClick={() => (window.location.href = "/discussion")}
        >
          💬 Discussion Center
        </button>

        <button
          style={styles.actionBtn}
          onClick={() => alert("Proposals Page")}
        >
          📩 View Proposals
        </button>
      </div>

      {/* My Projects */}
      <h2 style={styles.title}>My Projects</h2>

      <div style={styles.projectGrid}>
        {projects.map((project) => (
          <div key={project.project_id} style={styles.projectCard}>
            <h3>{project.title}</h3>

            <p>{project.description}</p>

            <p>
              <strong>Budget:</strong> ₹{project.budget}
            </p>

            <p>
              <strong>Status:</strong> {project.status}
            </p>

            {/* Progress */}
            <div style={styles.progressBar}>
              <div
                style={{
                  ...styles.progressFill,
                  width:
                    project.status === "completed"
                      ? "100%"
                      : project.status === "in_progress"
                      ? "60%"
                      : "20%"
                }}
              />
            </div>

            <div style={styles.btnRow}>
              <button
                style={styles.viewBtn}
                onClick={() => (window.location.href="/proposals")}
              >
                View Proposals
              </button>

              <button
                style={styles.chatBtn}
                onClick={() => (window.location.href = "/discussion")}
              >
                Open Chat
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

const styles = {
  page: {
    padding: "30px",
    background: "#f1f5f9",
    minHeight: "100vh"
  },

  hero: {
    background: "linear-gradient(135deg,#2563eb,#38bdf8)",
    color: "white",
    padding: "30px",
    borderRadius: "20px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center"
  },

  postBtn: {
    border: "none",
    padding: "14px 24px",
    borderRadius: "10px",
    cursor: "pointer",
    fontWeight: "bold"
  },

  stats: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit,minmax(220px,1fr))",
    gap: "20px",
    marginTop: "25px"
  },

  card: {
    background: "white",
    padding: "20px",
    borderRadius: "15px",
    textAlign: "center",
    boxShadow: "0 2px 10px rgba(0,0,0,0.1)"
  },

  title: {
    marginTop: "30px",
    marginBottom: "15px"
  },

  quickGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit,minmax(220px,1fr))",
    gap: "20px"
  },

  actionBtn: {
    background: "white",
    border: "none",
    padding: "20px",
    borderRadius: "15px",
    fontSize: "16px",
    fontWeight: "bold",
    cursor: "pointer",
    boxShadow: "0 2px 10px rgba(0,0,0,0.1)"
  },

  projectGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit,minmax(300px,1fr))",
    gap: "20px"
  },

  projectCard: {
    background: "white",
    padding: "20px",
    borderRadius: "15px",
    boxShadow: "0 2px 10px rgba(0,0,0,0.1)"
  },

  progressBar: {
    width: "100%",
    height: "10px",
    background: "#e2e8f0",
    borderRadius: "10px",
    marginTop: "10px"
  },

  progressFill: {
    height: "10px",
    borderRadius: "10px",
    background: "#22c55e"
  },

  btnRow: {
    display: "flex",
    gap: "10px",
    marginTop: "15px"
  },

  viewBtn: {
    flex: 1,
    padding: "10px",
    border: "none",
    background: "#2563eb",
    color: "white",
    borderRadius: "8px",
    cursor: "pointer"
  },

  chatBtn: {
    flex: 1,
    padding: "10px",
    border: "none",
    background: "#22c55e",
    color: "white",
    borderRadius: "8px",
    cursor: "pointer"
  }
};

export default ClientDashboard;