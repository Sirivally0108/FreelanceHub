import { useEffect, useState } from "react";
import axios from "axios";

function Proposals() {

  const user = JSON.parse(localStorage.getItem("user"));

  const [projects,setProjects]=useState([]);
  const [selectedProject,setSelectedProject]=useState(null);
  const [proposals,setProposals]=useState([]);

  useEffect(()=>{

    loadProjects();

  },[]);

  const loadProjects=async()=>{

    const projectRes=await axios.get(
      "http://localhost:5000/api/projects"
    );

    const myProjects=projectRes.data.data.filter(
      p=>p.client_id===user.user_id
    );

    setProjects(myProjects);

    if(myProjects.length>0){

      loadProposals(myProjects[0].project_id);

      setSelectedProject(myProjects[0].project_id);

    }

  };

  const loadProposals=async(projectId)=>{

    const res=await axios.get(
      `http://localhost:5000/api/proposals/project/${projectId}`
    );

    setProposals(res.data.data);

  };

  const updateStatus=async(id,status)=>{

    await axios.put(
      `http://localhost:5000/api/proposals/${id}`,
      {status}
    );

    loadProposals(selectedProject);

  };

  return(

<div style={styles.page}>

<h1 style={styles.heading}>
Project Proposals
</h1>

<select

style={styles.select}

value={selectedProject||""}

onChange={(e)=>{

setSelectedProject(e.target.value);

loadProposals(e.target.value);

}}

>

{

projects.map(project=>(

<option
key={project.project_id}
value={project.project_id}
>

{project.title}

</option>

))

}

</select>

{

proposals.length===0?

<p>No proposals received.</p>

:

proposals.map(p=>(

<div
key={p.proposal_id}
style={styles.card}
>

<h3>{p.proposal_text}</h3>

<p>
Budget :
₹{p.proposed_budget}
</p>

<p>
Status :
<b>{p.status}</b>
</p>

<div style={styles.row}>

<button

style={styles.accept}

onClick={()=>

updateStatus(
p.proposal_id,
"accepted"
)

}

>

Accept

</button>

<button

style={styles.reject}

onClick={()=>

updateStatus(
p.proposal_id,
"rejected"
)

}

>

Reject

</button>

</div>

</div>

))

}

</div>

);

}

const styles={

page:{
padding:"35px",
background:"#eef6ff",
minHeight:"100vh"
},

heading:{
marginBottom:"20px"
},

select:{
padding:"12px",
width:"320px",
borderRadius:"10px",
marginBottom:"25px",
border:"1px solid #ddd"
},

card:{
background:"white",
padding:"20px",
marginBottom:"18px",
borderRadius:"15px",
boxShadow:"0 4px 12px rgba(0,0,0,.1)"
},

row:{
display:"flex",
gap:"12px",
marginTop:"15px"
},

accept:{
background:"#22c55e",
color:"white",
border:"none",
padding:"10px 20px",
borderRadius:"8px",
cursor:"pointer"
},

reject:{
background:"#ef4444",
color:"white",
border:"none",
padding:"10px 20px",
borderRadius:"8px",
cursor:"pointer"
}

};

export default Proposals;