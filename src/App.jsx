import "./App.css";
import Sidebar from "./components/Sidebar";
import {
  Routes as BrowserRoutes,
  Route,
  BrowserRouter as Router,
} from "react-router-dom";
import Home from "./pages/Home";
import { Suspense } from "react";
import Projects from "./pages/Projects";
import Billing from "./pages/Billing";
import Integrations from "./pages/Integrations";
import Project from "./pages/Project";
import Shipments from "./pages/Shipments";
import Settings from "./pages/Settings";

function App() {
  return (
    <Router>
      <section style={{ display: "flex", width: "100%" }}>
        <Sidebar />
        <Suspense fallback={<div>Loading...</div>}>
          <BrowserRoutes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/billing" element={<Billing />} />
            <Route path="/integrations" element={<Integrations />} />
            <Route path="/projects/:id" element={<Project />} />
            <Route path="/shipments" element={<Shipments />} />
            <Route path="/settings" element={<Settings />} />
            {/* Uncomment and add more routes as needed */}
            {/* <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} /> */}
          </BrowserRoutes>
        </Suspense>
      </section>
    </Router>
  );
}

export default App;
