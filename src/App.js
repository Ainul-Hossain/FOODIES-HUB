import Navbar from "./components/Navbar";
import AboutSection from "./components/AboutSection";
import ImproveSkills from "./components/ImproveSkills";
import QuoteSection from './components/QuoteSection';
import ChiefsSection from "./components/ChiefsSection";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Navbar/>
      <div className="container main">
        <AboutSection/>
        <ImproveSkills/>
        <QuoteSection/>
        <ChiefsSection/>
      </div>
      <Footer/>
    </div>
  );
}

export default App;
