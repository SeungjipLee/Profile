import { useNavigate } from "react-router-dom"

function NavBar() {
  const navigate = useNavigate()
  return (
    <nav className="flex flex-row gap-10 fixed top-0">
      <p onClick={() => navigate("/")}>Home</p>
      <p onClick={() => navigate("/about-me")}>About Me</p>
      <p onClick={() => navigate("/skills")}>Skills</p>
      <p onClick={() => navigate("/projects")}>Projects</p>
      <p onClick={() => navigate("/question-answer")}>Q & A</p>
    </nav>
  )
}

export default NavBar