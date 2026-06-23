function Projects() {
  const projects = [
    {
      title: "React E-Commerce Website",
      budget: "₹20,000",
      skills: "React, Node.js",
      proposals: 15,
    },
    {
      title: "Portfolio Website Design",
      budget: "₹8,000",
      skills: "HTML, CSS, JavaScript",
      proposals: 8,
    },
    {
      title: "Python Automation Tool",
      budget: "₹15,000",
      skills: "Python, Automation",
      proposals: 12,
    },
    {
      title: "Mobile App UI Design",
      budget: "₹25,000",
      skills: "Figma, UI/UX",
      proposals: 10,
    },
  ];

  return (
    <div style={styles.page}>
      {/* Header */}
      <div style={styles.hero}>
        <h1>🚀 Find Your Next Opportunity</h1>
        <p>
          Explore projects, connect with clients, and grow your freelance career.
        </p>
      </div>

      {/* Search */}
      <input
        type="text"
        placeholder="🔎 Search projects..."
        style={styles.search}
      />

      {/* Categories */}
      <div style={styles.categories}>
        <button style={styles.categoryBtn}>React</button>
        <button style={styles.categoryBtn}>Python</button>
        <button style={styles.categoryBtn}>UI/UX</button>
        <button style={styles.categoryBtn}>AI/ML</button>
        <button style={styles.categoryBtn}>Web Development</button>
      </div>

      {/* Stats */}
      <div style={styles.statsContainer}>
        <div style={styles.statCard}>
          <h2>500+</h2>
          <p>Projects</p>
        </div>

        <div style={styles.statCard}>
          <h2>120+</h2>
          <p>Clients</p>
        </div>

        <div style={styles.statCard}>
          <h2>300+</h2>
          <p>Freelancers</p>
        </div>
      </div>

      {/* Featured Project */}
      <div style={styles.featured}>
        <h2>🔥 Featured Project</h2>

        <h3>Full Stack Developer Needed</h3>

        <p>Budget: ₹40,000</p>

        <button style={styles.applyBtn}>
          Apply Now
        </button>
      </div>

      {/* Projects Grid */}
      <h2 style={{ marginTop: "40px" }}>Latest Projects</h2>

      <div style={styles.projectGrid}>
        {projects.map((project, index) => (
          <div key={index} style={styles.projectCard}>
            <h3>{project.title}</h3>

            <p>
              <strong>Budget:</strong> {project.budget}
            </p>

            <p>
              <strong>Skills:</strong> {project.skills}
            </p>

            <p>
              <strong>Proposals:</strong> {project.proposals}
            </p>

            <div style={styles.buttonRow}>
              <button style={styles.applyBtn}>
                Apply
              </button>

              <button style={styles.saveBtn}>
                ❤️ Save
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
    minHeight: "100vh",
    backgroundColor: "#f0f9ff",
    padding: "30px",
  },

  hero: {
    textAlign: "center",
    marginBottom: "30px",
  },

  search: {
    width: "100%",
    maxWidth: "600px",
    display: "block",
    margin: "0 auto",
    padding: "15px",
    borderRadius: "10px",
    border: "1px solid #ccc",
    fontSize: "16px",
  },

  categories: {
    display: "flex",
    gap: "10px",
    flexWrap: "wrap",
    justifyContent: "center",
    marginTop: "20px",
    marginBottom: "30px",
  },

  categoryBtn: {
    padding: "10px 15px",
    border: "none",
    borderRadius: "20px",
    backgroundColor: "#38bdf8",
    color: "white",
    cursor: "pointer",
  },

  statsContainer: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
    gap: "20px",
    marginBottom: "30px",
  },

  statCard: {
    backgroundColor: "white",
    padding: "20px",
    textAlign: "center",
    borderRadius: "15px",
    boxShadow: "0 4px 15px rgba(0,0,0,0.08)",
  },

  featured: {
    background: "linear-gradient(135deg, #38bdf8, #0ea5e9)",
    color: "white",
    padding: "25px",
    borderRadius: "20px",
    textAlign: "center",
    marginBottom: "30px",
  },

  projectGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
    gap: "20px",
  },

  projectCard: {
    backgroundColor: "white",
    padding: "20px",
    borderRadius: "15px",
    boxShadow: "0 4px 15px rgba(0,0,0,0.08)",
  },

  buttonRow: {
    display: "flex",
    gap: "10px",
    marginTop: "15px",
  },

  applyBtn: {
    backgroundColor: "#0ea5e9",
    color: "white",
    border: "none",
    padding: "10px 15px",
    borderRadius: "8px",
    cursor: "pointer",
  },

  saveBtn: {
    backgroundColor: "#e2e8f0",
    border: "none",
    padding: "10px 15px",
    borderRadius: "8px",
    cursor: "pointer",
  },
};

export default Projects;