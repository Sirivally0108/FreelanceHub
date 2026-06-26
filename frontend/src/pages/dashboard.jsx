import ClientDashboard from "./ClientDashboard";
import FreelancerDashboard from "./FreelancerDashboard";

export default function Dashboard() {

  const user = JSON.parse(localStorage.getItem("user"));

  if(!user){
    window.location="/login";
    return null;
  }

  return user.role==="client"
    ? <ClientDashboard/>
    : <FreelancerDashboard/>;

}
