import Topbar from "./components/topbar/Topbar";
import Intro from "./components/intro/Intro"
import Portfolio from "./components/portfolio/Portfolio"
import Works from "./components/works/Works"
import projectTiles from "./components/projectTiles/projectTiles"
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
        <projectTiles/>
        <Contacts/>
      </div>
    </div>
  );
}

export default App;
