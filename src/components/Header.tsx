import { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import bg from "../images/bg-header.jpg";
import { IHeaderProps } from "../type";
import HeaderSlider from "./HeaderSlider";

const Header: React.FC<IHeaderProps> = ({ id }) => {
  const ref = useRef<HTMLDivElement>(null);
  const [counter, setCounter] = useState<boolean>(false);

  useEffect(() => {
    setTimeout(() => {
      if (!ref.current) {
        return;
      }
      ref.current.style.opacity = "1";
      setCounter((counter) => !counter);
    }, 500);
  }, []);

  return (
    <StyledHeader id={id}>
      <StyledBG />
      <StyledTextureBlock ref={ref}>
        <HeaderSlider counter={counter} />
        <StyledH1>Javascript Developer</StyledH1>
        <StyledH1>정연광입니다.</StyledH1>
      </StyledTextureBlock>
    </StyledHeader>
  );
};

export default Header;

const StyledHeader = styled.header`
  width: 100%;
  height: 100vh;
  position: relative;
  ${(props) => props.theme.flexCenter};
`;

const StyledBG = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url(${bg});
  background-size: cover;
  background-repeat: no-repeat;
  background-attachment: fixed;
  /* opacity: 0.5; */
`;

const StyledTextureBlock = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  font-size: 64px;
  font-weight: 700;
  gap: 16px;
  color: #fff;
  opacity: 0;
  transition: 1s;
`;

const StyledH1 = styled.h1`
  height: 60px;
  ${(props) => props.theme.flexCenter};
`;
