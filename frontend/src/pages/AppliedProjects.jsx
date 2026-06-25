import { useEffect,useState } from "react";
import axios from "axios";

function AppliedProjects(){

 const [proposals,setProposals] = useState([]);

 useEffect(()=>{

  axios
  .get("http://localhost:5000/api/proposals/freelancer/4")
  .then((res)=>{
   setProposals(res.data.data);
  });

 },[]);

 return(
  <div style={{padding:"30px"}}>

   <h1>Applied Projects</h1>

   {
    proposals.map((proposal)=>(
      <div
       key={proposal.proposal_id}
       style={{
        background:"white",
        padding:"20px",
        marginBottom:"15px",
        borderRadius:"10px"
       }}
      >
       <h3>Project #{proposal.project_id}</h3>

       <p>{proposal.proposal_text}</p>

       <p>Status: {proposal.status}</p>

      </div>
    ))
   }

  </div>
 );
}

export default AppliedProjects;