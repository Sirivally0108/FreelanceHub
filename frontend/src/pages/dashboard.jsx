import ClientDashboard from "./ClientDashboard";
import FreelancerDashboard from "./FreelancerDashboard";

export default function Dashboard() {
  const role = localStorage.getItem("role");

  return role === "client"
    ? <ClientDashboard />
    : <FreelancerDashboard />;
}