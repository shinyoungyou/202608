import { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ReactGA from "react-ga4";
import Home from "./components/Home.jsx";
import ProjectDetail from "./components/ProjectDetail.jsx";

// Initialize Google Analytics with your Measurement ID
// (Replace 'G-XXXXXXXXXX' with your actual Measurement ID from GA4)
ReactGA.initialize("G-EHY3CQ6MYM");

// 1. Define the tracker hook (now focused on analytics logging if needed)
function useUtmTracker() {
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const utmSource = params.get("utm_source");

    if (utmSource) {
      console.log(`Visitor arrived from source: ${utmSource}`);
      // GA4 automatically captures UTM parameters out-of-the-box when a user lands on the page.
    }
  }, []);
}

// 2. Call the hook inside your root App component
export default function App() {
  useUtmTracker();

  return (
    <BrowserRouter basename="/202608/">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects/:slug" element={<ProjectDetail />} />
      </Routes>
    </BrowserRouter>
  );
}
