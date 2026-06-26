import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Navigate } from "react-router-dom";

import Navbar from "./Components/Navbar";

import Home from "./pages/home";
import Login from "./pages/login";
import Register from "./pages/register";
import Dashboard from "./pages/dashboard";
import Projects from "./pages/projects";

import Messages from "./pages/Messages";
import Discussion from "./pages/Discussion";
import PostProject from "./pages/PostProject";

import FreelancerDashboard from "./pages/FreelancerDashboard";
import ClientDashboard from "./pages/ClientDashboard";

import Proposals from "./pages/Proposals";
import MyProjects from "./pages/MyProjects";
import AppliedProjects from "./pages/AppliedProjects";
import Reviews from "./pages/Reviews";
function PrivateRoute({children,role}){

const user=JSON.parse(localStorage.getItem("user"));

if(!user){
return <Navigate to="/login"/>;
}

if(role && user.role!==role){
return <Navigate to="/dashboard"/>;
}

return children;

}
export default function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />

        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
<Route
  path="/dashboard"
  element={
    <PrivateRoute>
      <Dashboard />
    </PrivateRoute>
  }
/>

<Route
  path="/freelancer-dashboard"
  element={
    <PrivateRoute>
      <FreelancerDashboard />
    </PrivateRoute>
  }
/>

<Route
  path="/client-dashboard"
  element={
    <PrivateRoute>
      <ClientDashboard />
    </PrivateRoute>
  }
/>

<Route
  path="/projects"
  element={
    <PrivateRoute>
      <Projects />
    </PrivateRoute>
  }
/>

<Route
  path="/discussion"
  element={
    <PrivateRoute>
      <Discussion />
    </PrivateRoute>
  }
/>

<Route
  path="/messages"
  element={
    <PrivateRoute>
      <Messages />
    </PrivateRoute>
  }
/>

<Route
  path="/reviews"
  element={
    <PrivateRoute>
      <Reviews />
    </PrivateRoute>
  }
/>

<Route
  path="/applied-projects"
  element={
    <PrivateRoute>
      <AppliedProjects />
    </PrivateRoute>
  }
/>
        <Route path="/proposals" element={<Proposals />} />

        <Route path="/post-project" element={<PostProject />} />

      </Routes>
    </BrowserRouter>
  );
}