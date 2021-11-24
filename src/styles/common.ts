import styled from "styled-components";

export const StyledSection = styled.section`
  display: flex;
  box-sizing: border-box;
  font-size: 1rem;
  padding-top: 4em;
  padding-bottom: 4em;
`;

export const StyledH1 = styled.h1`
  ${(props) => props.theme.flexCenter};
  color: ${(props) => props.theme.light.titleFontColor};
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: 30px;
`;

export const StyledInner = styled.div`
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  width: 1440px;
  font-size: 1rem;
  padding-left: 2em;
  padding-right: 2em;
  margin-left: auto;
  margin-right: auto;
`;

export const StyledInnerColumnWrap = styled(StyledInner)`
  flex-direction: column;
`;
