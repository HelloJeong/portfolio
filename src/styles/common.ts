import styled from "styled-components";

export const StyledSection = styled.section`
  box-sizing: border-box;
  padding-top: 60px;
  padding-bottom: 60px;
`;

export const StyledH1 = styled.h1`
  ${(props) => props.theme.flexCenter};
  color: ${(props) => props.theme.light.titleFontColor};
  font-size: 32px;
  font-weight: 700;
  margin-bottom: 30px;
`;
