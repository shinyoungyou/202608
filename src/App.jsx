import { useEffect } from "react";
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import ReactGA from "react-ga4";
import Home from "./components/Home.jsx";
import ProjectDetail from "./components/ProjectDetail.jsx";

ReactGA.initialize("G-XXXXXXXXXX");

// Component to handle the GitHub Pages 404 redirect query parameter
function RedirectHandler() {
  const navigate = useNavigate();

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const p = params.get("p");
    if (p) {
      // Clean up the URL and navigate to the intended path
      window.history.replaceState(null, null, window.location.pathname);
      navigate(p);
    }
  }, [navigate]);

  return null;
}

export default function App() {
  return (
    <BrowserRouter basename="/202608/">
      <RedirectHandler />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects/:slug" element={<ProjectDetail />} />
      </Routes>
    </BrowserRouter>
  );
}
