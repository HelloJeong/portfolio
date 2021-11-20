import styled from "styled-components";
import { IAboutProps } from "../type";

/* eslint-disable jsx-a11y/anchor-is-valid, react/jsx-no-target-blank */
const About: React.FC<IAboutProps> = ({ id }) => {
  return (
    <StyledSection id={id}>
      <StyledH1>About</StyledH1>
      <StyledParagraphWrap>
        <StyledParagraph>MERN + TS 스택을 주로 사용하고 있습니다.</StyledParagraph>
        <StyledParagraph>
          항상 안전한 코드, 효율적인 코드를 작성하기 위해 노력하고 있습니다.
        </StyledParagraph>
        <StyledParagraph>잘 부탁드립니다.</StyledParagraph>
        <StyledParagraph>
          Github :{" "}
          <a href="https://github.com/HelloJeong" rel="noreferror" target="_blank">
            https://github.com/HelloJeong
          </a>
        </StyledParagraph>
        <StyledParagraph>
          Velog :{" "}
          <a href="https://velog.io/@jeongyk92" rel="noreferror" target="_blank">
            https://velog.io/@jeongyk92
          </a>
        </StyledParagraph>
      </StyledParagraphWrap>
    </StyledSection>
  );
};

export default About;

const StyledSection = styled.section`
  box-sizing: border-box;
  padding-top: 60px;
  padding-bottom: 60px;
`;

const StyledH1 = styled.h1`
  ${(props) => props.theme.flexCenter};
  color: ${(props) => props.theme.titleFontColor};
  font-size: 32px;
  font-weight: 700;
  margin-bottom: 30px;
`;

const StyledParagraphWrap = styled.div`
  ${(props) => props.theme.flexCenter};
  flex-direction: column;
  line-height: 1.5;
`;

const StyledParagraph = styled.p`
  a {
    text-decoration: underline;
    color: ${(props) => props.theme.basicFontColor};
  }
`;
