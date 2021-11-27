import { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import _ from "lodash";
import Hamburger from "../images/Hamburger_icon.svg";

/* eslint-disable jsx-a11y/anchor-is-valid, no-script-url */
const Nav: React.FC = () => {
  const [showNav, setShowNav] = useState<boolean>(false);

  const navRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    window.addEventListener(
      "scroll",
      _.throttle(() => {
        if (!navRef.current) {
          return;
        }
        if (window.scrollY < 100) {
          navRef.current.classList.remove("scroll");
        } else {
          navRef.current.classList.add("scroll");
        }
      }, 300)
    );
  }, []);
  return (
    <StyledNav ref={navRef}>
      <StyledUl show={showNav}>
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
      <StyledHamburger img={Hamburger} onClick={onClickHamburger}></StyledHamburger>
    </StyledNav>
  );
  function onClickHamburger() {
    setShowNav(!showNav);
  }
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
  border-bottom: none;
  background-color: transparent;

  &.scroll {
    border-bottom: 1px solid #b9b9b9;
    background-color: #fff;
    ul li a {
      color: #5f5f5f;
    }
  }

  @media ${(props) => props.theme.size.mobile} {
    background-color: #fff;
    ul li a {
      color: #5f5f5f;
    }
    padding-right: 0;
  }
`;

const StyledUl = styled.ul<{ show: boolean }>`
  width: 800px;
  height: 60px;
  display: flex;

  li:first-child::before {
    display: none;
  }

  @media ${(props) => props.theme.size.mobile} {
    display: ${(props) => (props.show ? "flex" : "none")};
    flex-direction: column;
    width: 100%;
    height: auto;
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
    color: ${(props) => props.theme.light.navFontColor};
    font-size: 1.4rem;
  }

  @media ${(props) => props.theme.size.mobile} {
    font-size: 2rem;
    padding-top: 0.75em;
    padding-bottom: 0.75em;
    &::before {
      display: none;
    }
  }
`;

const StyledHamburger = styled.div<{ img: string }>`
  display: none;
  width: 32px;
  height: 32px;
  background-image: url(${(props) => props.img});
  background-size: 32px 32px;
  background-repeat: no-repeat;
  position: absolute;
  top: 15px;
  right: 15px;
  cursor: pointer;
  @media ${(props) => props.theme.size.mobile} {
    display: block;
  }
`;
