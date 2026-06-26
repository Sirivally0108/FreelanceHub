import { useEffect, useState } from "react";
import axios from "axios";

function AppliedProjects() {

  const user = JSON.parse(localStorage.getItem("user"));

  if (!user) {
    window.location = "/login";
    return null;
  }

  const freelancerId = user.user_id;

  const [proposals, setProposals] = useState([]);

  useEffect(() => {

    loadProjects();

  }, []);

  const loadProjects = async () => {

    try{

      const res = await axios.get(
        `http://localhost:5000/api/proposals/freelancer/${freelancerId}`
      );

      setProposals(res.data.data);

    }
    catch(err){
      console.log(err);
    }

  };

  return (

    <div style={styles.page}>

      <div style={styles.header}>
        <h1>📩 Applied Projects</h1>
        <p>Projects you have applied for.</p>
      </div>

      {
      proposals.length===0 ?

      <div style={styles.empty}>

        <h2>No Applied Projects</h2>

        <p>
          Browse projects and submit your first proposal.
        </p>

      </div>

      :

      proposals.map((proposal)=>(

        <div
        key={proposal.proposal_id}
        style={styles.card}
        >

          <div style={styles.topRow}>

            <h2>{proposal.title}</h2>

            <span
            style={{
              ...styles.badge,
              background:
              proposal.status==="accepted"
              ?"#22c55e"
              :
              proposal.status==="rejected"
              ?"#ef4444"
              :
              "#f59e0b"
            }}
            >

              {proposal.status.toUpperCase()}

            </span>

          </div>

          <p>{proposal.description}</p>

          <div style={styles.infoRow}>

            <p>
              💰 Budget :
              <strong> ₹{proposal.budget}</strong>
            </p>

            <p>
              📅 Applied :
              {" "}
              {
                new Date(
                  proposal.submitted_at
                ).toLocaleDateString()
              }
            </p>

          </div>

        </div>

      ))

      }

    </div>

  );

}

const styles={

page:{
background:"#eef8ff",
minHeight:"100vh",
padding:"35px"
},

header:{
marginBottom:"30px"
},

empty:{
background:"white",
padding:"40px",
borderRadius:"15px",
textAlign:"center",
boxShadow:"0 5px 15px rgba(0,0,0,.1)"
},

card:{
background:"white",
padding:"25px",
marginBottom:"20px",
borderRadius:"15px",
boxShadow:"0 5px 15px rgba(0,0,0,.1)"
},

topRow:{
display:"flex",
justifyContent:"space-between",
alignItems:"center",
marginBottom:"15px"
},

badge:{
padding:"8px 16px",
color:"white",
borderRadius:"20px",
fontWeight:"bold"
},

infoRow:{
display:"flex",
justifyContent:"space-between",
marginTop:"20px"
}

};

export default AppliedProjects;