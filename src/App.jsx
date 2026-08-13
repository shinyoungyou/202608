import { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home.jsx";
import ProjectDetail from "./components/ProjectDetail.jsx";

// 1. Define the UTM Tracker Hook
function useUtmTracker() {
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const utmSource = params.get("utm_source");
    const utmMedium = params.get("utm_medium");
    const utmCampaign = params.get("utm_campaign");

    if (utmSource) {
      localStorage.setItem("visitor_source", utmSource);
      if (utmMedium) localStorage.setItem("visitor_medium", utmMedium);
      if (utmCampaign) localStorage.setItem("visitor_campaign", utmCampaign);

      console.log(`Visitor arrived from source: ${utmSource}`);
    }
  }, []);
}

// 2. Call the hook inside your root App component
export default function App() {
  useUtmTracker();

  return (
    <BrowserRouter basename="/portfolio-202608/">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects/:slug" element={<ProjectDetail />} />
      </Routes>
    </BrowserRouter>
  );
}
