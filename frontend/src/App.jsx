import { BrowserRouter, Routes, Route } from "react-router-dom";

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

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />

        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/reviews" element={<Reviews />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/applied-projects" element={<AppliedProjects />} />
        <Route path="/client-dashboard" element={<ClientDashboard />} />
        <Route path="/freelancer-dashboard" element={<FreelancerDashboard />} />
        <Route path="/proposals" element={<Proposals />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/post-project" element={<PostProject />} />

        <Route path="/messages" element={<Messages />} />
        <Route path="/discussion" element={<Discussion />} />
      </Routes>
    </BrowserRouter>
  );
}