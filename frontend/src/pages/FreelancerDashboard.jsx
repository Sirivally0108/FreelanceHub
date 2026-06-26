import { useEffect, useState } from "react";
import axios from "axios";

function FreelancerDashboard() {

  const user = JSON.parse(localStorage.getItem("user"));

  if (!user) {
    window.location = "/login";
    return null;
  }

  const freelancerId = user.user_id;

  const [projects, setProjects] = useState([]);
  const [reviews, setReviews] = useState([]);
  const [proposals, setProposals] = useState([]);
  const [appliedProjects, setAppliedProjects] = useState([]);
  const [earnings, setEarnings] = useState(0);

  useEffect(() => {
    loadDashboard();
  }, []);

  const loadDashboard = async () => {
    try {

      const projectRes = await axios.get(
        "http://localhost:5000/api/projects"
      );
      setProjects(projectRes.data.data);

      const proposalRes = await axios.get(
        `http://localhost:5000/api/proposals/freelancer/${freelancerId}`
      );

      setProposals(proposalRes.data.data);

      setAppliedProjects(
        proposalRes.data.data.map((p) => p.project_id)
      );

      const reviewRes = await axios.get(
        `http://localhost:5000/api/reviews/${freelancerId}`
      );

      setReviews(reviewRes.data.data);

      try {

        const earningRes = await axios.get(
          `http://localhost:5000/api/proposals/earnings/${freelancerId}`
        );

        setEarnings(earningRes.data.earnings);

      } catch {}

    } catch (err) {
      console.log(err);
    }
  };

  const avgRating =
    reviews.length > 0
      ? (
          reviews.reduce((sum, r) => sum + Number(r.rating), 0) /
          reviews.length
        ).toFixed(1)
      : 0;

  const applyProject = async (project) => {

    try {

      await axios.post(

        "http://localhost:5000/api/proposals",

        {
          project_id: project.project_id,
          freelancer_id: freelancerId,
          proposal_text: `Application for ${project.title}`,
          proposed_budget: project.budget
        },

        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`
          }
        }

      );

      alert("Applied Successfully");

      loadDashboard();

    } catch (err) {

      alert(
        err.response?.data?.message ||
        "Already Applied"
      );

    }

  };

  return (

    <div style={styles.page}>

      {/* HERO */}

      <div style={styles.hero}>

        <div>

          <h1 style={styles.heroTitle}>
            👋 Welcome, {user.name}
          </h1>

          <p style={styles.heroText}>
            Manage projects, clients and earnings from one place.
          </p>

        </div>

        <div style={{display:"flex",gap:"15px"}}>

          <button
            style={styles.heroBtn}
            onClick={()=>window.location="/projects"}
          >
            🔍 Browse Projects
          </button>

          <button
            style={styles.logout}
            onClick={()=>{
              localStorage.clear();
              window.location="/login";
            }}
          >
            🚪 Logout
          </button>

        </div>

      </div>

      {/* STATS */}

      <div style={styles.stats}>

        <div style={styles.statCard}>
          <h1>📩</h1>
          <h2>{proposals.length}</h2>
          <p>Applied Projects</p>
        </div>

        <div style={styles.statCard}>
          <h1>✅</h1>
          <h2>
            {
              proposals.filter(
                p=>p.status==="accepted"
              ).length
            }
          </h2>
          <p>Completed Projects</p>
        </div>

        <div style={styles.statCard}>
          <h1>⭐</h1>
          <h2>{avgRating}</h2>
          <p>Average Rating</p>
        </div>

        <div style={styles.statCard}>
          <h1>💰</h1>
          <h2>₹{earnings}</h2>
          <p>Total Earnings</p>
        </div>

      </div>

      {/* QUICK ACTIONS */}

      <h2 style={styles.heading}>
        Quick Actions
      </h2>

      <div style={styles.quickGrid}>

        <button
          style={styles.actionBtn}
          onClick={()=>window.location="/applied-projects"}
        >
          📩 Applied Projects
        </button>

        <button
          style={styles.actionBtn}
          onClick={()=>window.location="/discussion"}
        >
          💬 Discussion Center
        </button>

        <button
          style={styles.actionBtn}
          onClick={()=>window.location="/messages"}
        >
          📨 Messages
        </button>

        <button
          style={styles.actionBtn}
          onClick={()=>window.location="/reviews"}
        >
          ⭐ Reviews
        </button>

      </div>

      {/* PROJECTS */}

      <h2 style={styles.heading}>
        Available Projects
      </h2>

      <div style={styles.projectGrid}>

        {
          projects

          .filter(
            project=>!appliedProjects.includes(project.project_id)
          )

          .map(project=>(

            <div
              key={project.project_id}
              style={styles.projectCard}
            >

              <h2>{project.title}</h2>

              <p>{project.description}</p>

              <p>
                <b>Budget:</b> ₹{project.budget}
              </p>

              <p>
                <b>Status:</b> {project.status}
              </p>

              <div style={styles.progressBar}>

                <div
                  style={{
                    ...styles.progressFill,

                    width:

                    project.status==="completed"
                    ?"100%"
                    :project.status==="in_progress"
                    ?"60%"
                    :"20%"

                  }}
                />

              </div>

              <button
                style={styles.applyBtn}
                onClick={()=>applyProject(project)}
              >
                🚀 Apply Now
              </button>

            </div>

          ))
        }

      </div>

    </div>

  );

}
const styles = {

  page:{
    minHeight:"100vh",
    background:"#eef6ff",
    padding:"30px",
    fontFamily:"Arial, sans-serif"
  },

  hero:{
    background:"linear-gradient(135deg,#0f172a,#2563eb)",
    color:"white",
    borderRadius:"20px",
    padding:"40px",
    display:"flex",
    justifyContent:"space-between",
    alignItems:"center",
    boxShadow:"0 10px 25px rgba(0,0,0,.2)"
  },

  heroTitle:{
    margin:0,
    fontSize:"38px",
    fontWeight:"700"
  },

  heroText:{
    marginTop:"10px",
    fontSize:"18px",
    opacity:.9
  },

  heroBtn:{
    background:"white",
    color:"#2563eb",
    border:"none",
    padding:"12px 24px",
    borderRadius:"10px",
    cursor:"pointer",
    fontWeight:"bold",
    fontSize:"15px"
  },

  logout:{
    background:"#ef4444",
    color:"white",
    border:"none",
    padding:"12px 24px",
    borderRadius:"10px",
    cursor:"pointer",
    fontWeight:"bold",
    fontSize:"15px"
  },

  heading:{
    marginTop:"35px",
    marginBottom:"20px",
    color:"#1e293b"
  },

  stats:{
    display:"grid",
    gridTemplateColumns:"repeat(auto-fit,minmax(220px,1fr))",
    gap:"20px",
    marginTop:"30px"
  },

  statCard:{
    background:"white",
    borderRadius:"18px",
    padding:"25px",
    textAlign:"center",
    boxShadow:"0 8px 20px rgba(0,0,0,.08)",
    transition:"0.3s"
  },

  quickGrid:{
    display:"grid",
    gridTemplateColumns:"repeat(auto-fit,minmax(220px,1fr))",
    gap:"20px"
  },

  actionBtn:{
    background:"white",
    border:"none",
    borderRadius:"18px",
    padding:"25px",
    cursor:"pointer",
    fontWeight:"bold",
    fontSize:"17px",
    boxShadow:"0 8px 18px rgba(0,0,0,.08)"
  },

  projectGrid:{
    display:"grid",
    gridTemplateColumns:"repeat(auto-fit,minmax(330px,1fr))",
    gap:"25px"
  },

  projectCard:{
    background:"white",
    borderRadius:"20px",
    padding:"25px",
    boxShadow:"0 8px 20px rgba(0,0,0,.08)"
  },

  progressBar:{
    width:"100%",
    height:"10px",
    background:"#dbeafe",
    borderRadius:"20px",
    overflow:"hidden",
    marginTop:"15px",
    marginBottom:"20px"
  },

  progressFill:{
    height:"100%",
    background:"#22c55e"
  },

  applyBtn:{
    width:"100%",
    background:"#2563eb",
    color:"white",
    border:"none",
    padding:"14px",
    borderRadius:"10px",
    cursor:"pointer",
    fontWeight:"bold",
    fontSize:"16px"
  }

};

export default FreelancerDashboard;