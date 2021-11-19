import styled from "styled-components";
import { IAboutProps } from "../type";

const About: React.FC<IAboutProps> = ({ id }) => {
  return <StyledSection id={id}>About</StyledSection>;
};

export default About;

const StyledSection = styled.section`
  box-sizing: border-box;
  padding-top: 60px;
  padding-bottom: 60px;
`;
