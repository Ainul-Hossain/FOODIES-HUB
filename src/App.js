import Navbar from "./components/Navbar";
import AboutSection from "./components/AboutSection";
import ImproveSkills from "./components/ImproveSkills";

function App() {
  return (
    <div className="App">
      <Navbar/>
      <div className="container main">
        <AboutSection/>
        <ImproveSkills/>
      </div>
    </div>
  );
}

export default App;
