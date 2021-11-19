import { useEffect, useRef } from "react";
import styled from "styled-components";

/* eslint-disable jsx-a11y/anchor-is-valid, no-script-url */
const Nav: React.FC = () => {
  const navRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (!navRef.current) {
        return;
      }
      if (window.scrollY < 100) {
        navRef.current.style.backgroundColor = "transparent";
      } else {
        navRef.current.style.backgroundColor = "#fff";
      }
    });
  }, []);
  return (
    <StyledNav ref={navRef}>
      <StyledUl>
        <StyledLi>
          <a href="#Home">Home</a>
        </StyledLi>
        <StyledLi>
          <a href="#About">About</a>
        </StyledLi>
        <StyledLi>
          <a href="#Skill">Skill</a>
        </StyledLi>
        <StyledLi>
          <a href="#Work&Project">Work&Project</a>
        </StyledLi>
        <StyledLi>
          <a href="#Contact">Contact</a>
        </StyledLi>
      </StyledUl>
    </StyledNav>
  );
};

export default Nav;

const StyledNav = styled.nav`
  position: fixed;
  top: 0;
  right: 0;
  z-index: 10;
  width: 100%;
  padding-right: 60px;
  box-sizing: border-box;
  display: flex;
  justify-content: flex-end;
  transition: 0.5s;
`;

const StyledUl = styled.ul`
  width: 800px;
  height: 60px;
  display: flex;

  li:first-child::before {
    display: none;
  }
`;

const StyledLi = styled.li`
  width: 100%;
  height: 100%;
  ${(props) => props.theme.flexCenter};

  &::before {
    content: "|";
    margin: 0 15px;
  }

  a {
    ${(props) => props.theme.flexCenter};
    width: 100%;
    height: 100%;
    text-decoration: none;
    color: ${(props) => props.theme.navFontColor};
    font-size: 16px;
  }
`;
