import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home.jsx";
import ProjectDetail from "./components/ProjectDetail.jsx";

export default function App() {
  return (
    <BrowserRouter basename="/portfolio-202608/">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects/:slug" element={<ProjectDetail />} />
      </Routes>
    </BrowserRouter>
  );
}
