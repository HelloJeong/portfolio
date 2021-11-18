import "./App.css";
import About from "./components/About";
import Contact from "./components/Contact";
import Header from "./components/Header";
import Nav from "./components/Nav";
import Skill from "./components/Skill";
import Work from "./components/Work";

function App() {
  return (
    <div className="App">
      <Header />
      <Nav />
      <About />
      <Skill />
      <Work />
      <Contact />
    </div>
  );
}

export default App;
