import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainIndexPage from "./MainPage/MainIndexPage";
import AboutIndexPage from "./AboutPage/AboutIndexPage";
import SkillsIndexPage from "./SkillsPage/SkiilsIndexPage";
import ProjectsIndexPage from "./ProjectsPage/ProjectsIndexPage";
import QuestionsIndexPage from "./QuestionsPage/QuestionsIndexPage";

function Routers() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainIndexPage />}/>
        <Route path="/about-me" element={<AboutIndexPage />}/>
        <Route path="/skills" element={<SkillsIndexPage />}/>
        <Route path="/projects" element={<ProjectsIndexPage />}/>
        <Route path="/question-answer" element={<QuestionsIndexPage />}/>
      </Routes>
    </Router>
  )
}

export default Routers