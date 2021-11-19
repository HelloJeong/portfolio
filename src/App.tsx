import styled, { ThemeProvider } from "styled-components";

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
      <StyledApp>
        <Header id="Home" />
        <Nav />
        <About id="About" />
        <Skill id="Skill" />
        <Work id="Work&Project" />
        <Contact id="Contact" />
      </StyledApp>
    </ThemeProvider>
  );
}

export default App;

const StyledApp = styled.main`
  position: relative;
`;
