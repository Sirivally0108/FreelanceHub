import { useEffect, useState } from "react";
import axios from "axios";
const user = JSON.parse(localStorage.getItem("user"));
const freelancerId = user?.id;

function FreelancerDashboard() {
  const [projects, setProjects] = useState([]);
  const [proposals, setProposals] = useState([]);
  const [appliedProjects,setAppliedProjects] = useState([]);
  useEffect(() => {

    axios
      .get("http://localhost:5000/api/projects")
      .then((res) => setProjects(res.data.data))
      .catch((err) => console.log(err));

    axios
      .get("http://localhost:5000/api/proposals/freelancer/4")
      .then((res) => setProposals(res.data.data))
      .catch((err) => console.log(err));
    axios
    .get("http://localhost:5000/api/proposals/freelancer/4")
    .then((res)=>{
      setProposals(res.data.data);

      const ids = res.data.data.map(
        p => p.project_id
      );

      setAppliedProjects(ids);
    });
  }, []);
  const applyProject = async (project) => {
    try {
      await axios.post("http://localhost:5000/api/proposals", {
        project_id: project.project_id,
        freelancer_id: freelancerId,
        proposal_text: `Application for ${project.title}`,
        proposed_budget: project.budget
      });

      alert("Applied successfully");

      // refresh proposals from DB
      const res = await axios.get(
        `http://localhost:5000/api/proposals/freelancer/${freelancerId}`
      );

      setProposals(res.data.data);

    } catch (err) {
      alert(err.response?.data?.message || "Already applied or error");
    }
  };
  return (
    <div style={styles.page}>
      {/* Hero */}
      <div style={styles.hero}>
        <div>
          <h1>🚀 Freelancer Dashboard</h1>
          <p>Track projects, ratings, earnings and client discussions.</p>
        </div>

        <button
          style={styles.heroBtn}
          onClick={() => (window.location.href = "/projects")}
        >
          Browse Projects
        </button>
      </div>

      {/* Stats */}
      <div style={styles.stats}>
        <div style={styles.card}>
          <h2>{proposals.length}</h2>
          <p>Applied Projects</p>
        </div>

        <div style={styles.card}>
          <h2>2</h2>
          <p>Completed Projects</p>
        </div>

        <div style={styles.card}>
          <h2>4.8 ⭐</h2>
          <p>Average Rating</p>
        </div>

        <div style={styles.card}>
          <h2>₹50,000</h2>
          <p>Total Earnings</p>
        </div>
      </div>

      {/* Quick Actions */}
      <h2 style={styles.title}>Quick Actions</h2>

      <div style={styles.quickGrid}>
        <button
          style={styles.actionBtn}
          onClick={() => (window.location.href = "/applied-projects")}
        >
          📩 Applied Projects
        </button>

        <button
          style={styles.actionBtn}
          onClick={() => (window.location.href = "/discussion")}
        >
          💬 Discussion Center
        </button>

        <button
          style={styles.actionBtn}
          onClick={() => (window.location.href = "/projects")}
        >
          🔎 Browse Projects
        </button>

        <button
          style={styles.actionBtn}
          onClick={() => (window.location.href = "/reviews")}
        >
          ⭐ Reviews
        </button>
      </div>

      {/* Current Projects */}
      <h2 style={styles.title}>Available Projects</h2>

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
                style={styles.applyBtn}
                disabled={appliedProjects.includes(project.project_id)}
                onClick={() => applyProject(project)}
                >
                {
                appliedProjects.includes(project.project_id)
                ? "Applied"
                : "Apply"
                }
              </button>

              <button
                style={styles.chatBtn}
                onClick={() => (window.location.href = "/discussion")}
              >
                Chat
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
    cursor: "pointer",
    fontWeight: "bold",
    fontSize: "16px",
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
    background: "#22c55e",
    borderRadius: "10px"
  },

  btnRow: {
    display: "flex",
    gap: "10px",
    marginTop: "15px"
  },

  applyBtn: {
    flex: 1,
    padding: "10px",
    border: "none",
    background: "#0284c7",
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

export default FreelancerDashboard;