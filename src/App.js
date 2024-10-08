import { BrowserRouter as Router,Route,Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Header/Header.js";
import Home from "./Pages/Home/Home.js";
import About from "./Pages/About/About.js";
import Skills from "./Pages/Skills/Skills.js";
import Projects from "./Pages/Projects/Projects.js";
import Team from "./Pages/Team/Team.js";
import Contact from "./Pages/Contact/Contact.js";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/"element={<Home/>}/>
        <Route path="/about"element={<About/>}/>
        <Route path="/skills"element={<Skills/>}/>
        <Route path="/projects"element={<Projects/>}/>
        <Route path="/team"element={<Team/>}/>
        <Route path="/contact"element={<Contact/>}/>
      </Routes>
    </Router>
  );
}

export default App;
