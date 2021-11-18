import { ThemeProvider } from "styled-components";

import About from "./components/About";
import Contact from "./components/Contact";
import Header from "./components/Header";
import Nav from "./components/Nav";
import Skill from "./components/Skill";
import Work from "./components/Work";
import theme from "./styles/theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Header />
        <Nav />
        <About />
        <Skill />
        <Work />
        <Contact />
      </div>
    </ThemeProvider>
  );
}

export default App;
