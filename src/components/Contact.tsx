import styled from "styled-components";
import { StyledH1, StyledInnerColumnWrap, StyledSection } from "../styles/common";
import { IContactProps } from "../type";

const Contact: React.FC<IContactProps> = ({ id }) => {
  return (
    <StyledSection id={id}>
      <StyledInnerColumnWrap>
        <StyledH1>Contact</StyledH1>
        <StyledH3>
          Email : &nbsp; <a href="mailto:jeongyk92@gmail.com">jeongyk92@gmail.com</a>
        </StyledH3>
      </StyledInnerColumnWrap>
    </StyledSection>
  );
};

export default Contact;

const StyledH3 = styled.h3`
  ${(props) => props.theme.flexCenter};
  line-height: 1.5;
  font-size: 1.25rem;
  font-weight: 700;
  color: #000;
  a {
    color: #000;
  }
`;
