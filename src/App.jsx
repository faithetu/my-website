import Topbar from "./components/topbar/Topbar";
import Intro from "./components/intro/Intro"
import Portfolio from "./components/portfolio/Portfolio"
import Works from "./components/works/Works"
import ProjectTiles from "./components/projectTiles/ProjectTiles"
import Contacts from "./components/contacts/Contacts"
import "./app.css"

function App() {
  return (
    <div className="app">
      <Topbar/>
      <div className="sections">
        <Intro/>
        <Portfolio/>
        <Works/>
        <ProjectTiles/>
        <Contacts/>
      </div>
    </div>
  );
}

export default App;
