import styled from "styled-components";

export const StyledSection = styled.section`
  display: flex;
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

export const StyledInner = styled.div`
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  width: 1440px;
  padding-left: 30px;
  padding-right: 30px;
  margin-left: auto;
  margin-right: auto;
`;

export const StyledInnerColumnWrap = styled(StyledInner)`
  flex-direction: column;
`;
