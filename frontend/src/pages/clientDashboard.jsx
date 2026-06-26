import { useEffect, useState } from "react";
import axios from "axios";

function ClientDashboard() {
  const user = JSON.parse(localStorage.getItem("user"));

  if (!user) {
    window.location="/login";
    return null;
  }

  const clientId = user.user_id;

  const [projects,setProjects]=useState([]);
  const [proposals,setProposals]=useState([]);
  const [messages,setMessages]=useState([]);

  useEffect(()=>{

loadDashboard();

},[]);

const loadDashboard=async()=>{

try{

const projectRes=await axios.get(
"http://localhost:5000/api/projects"
);

const myProjects=

projectRes.data.data.filter(

p=>p.client_id===clientId

);

setProjects(myProjects);

let all=[];

for(const p of myProjects){

const res=await axios.get(

`http://localhost:5000/api/proposals/project/${p.project_id}`

);

all=[...all,...res.data.data];

}

setProposals(all);

try{

const msg=await axios.get(

`http://localhost:5000/api/messages/${clientId}`

);

setMessages(msg.data.data);

}catch{}

}catch(err){

console.log(err);

}

};

  return (
    <div style={styles.page}>
      {/* Hero */}
      <div style={styles.hero}>
        <div>
          <h1>👋 Welcome, {user.name}</h1>

<p>
Manage your projects and hire talented freelancers.
</p>
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
          <h2>

{

proposals.filter(

p=>p.status==="accepted"

).length

}

</h2>

<p>Freelancers Hired</p>
        </div>

        <div style={styles.card}>
          <h2>{messages.length}</h2>
          <p>Messages</p>
        </div>
      </div>

      {/* Quick Actions */}
      <h2 style={styles.title}>Quick Actions</h2>

      <div style={styles.quickGrid}>
        <div style={{display:"flex",gap:"15px"}}>

<button
style={styles.postBtn}
onClick={()=>window.location="/post-project"}
>

➕ Post Project

</button>

<button

style={{

background:"red",
color:"white",
padding:"14px 20px",
border:"none",
borderRadius:"10px",
cursor:"pointer"

}}

onClick={()=>{

localStorage.clear();

window.location="/login";

}}

>

Logout

</button>

</div>

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

  {projects.length === 0 ? (

    <div
      style={{
        gridColumn: "1 / -1",
        background: "white",
        padding: "40px",
        borderRadius: "15px",
        textAlign: "center",
        boxShadow: "0 2px 10px rgba(0,0,0,0.1)"
      }}
    >
      <h2>No Projects Posted Yet 📂</h2>

      <p>Click "Post Project" to create your first project.</p>

    </div>

  ) : (

    projects.map((project) => (

      <div
        key={project.project_id}
        style={styles.projectCard}
      >

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
            style={styles.viewBtn}
            onClick={() => (window.location.href = "/proposals")}
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

    ))

  )}

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