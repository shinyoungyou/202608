import { BrowserRouter, Routes, Route } from "react-router-dom";
import ReactGA from "react-ga4";
import Home from "./components/Home.jsx";
import ProjectDetail from "./components/ProjectDetail.jsx";

ReactGA.initialize("G-XXXXXXXXXX");

export default function App() {
  return (
    <BrowserRouter basename="/202608/">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects/:slug" element={<ProjectDetail />} />
      </Routes>
    </BrowserRouter>
  );
}
