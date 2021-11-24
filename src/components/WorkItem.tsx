import styled from "styled-components";
import { IWorkType } from "../type";

const WorkItem: React.FC<IWorkType> = ({
  img,
  title,
  text,
  skills,
  member,
  start_date,
  end_date,
}) => {
  return (
    <StyledLi>
      <StyledImgWrap>
        <img src={`/images/project-${img}`} alt={title} />
        <StyledMember>{member}인</StyledMember>
      </StyledImgWrap>
      <StyledTextureWrap>
        <StyledTitle>{title}</StyledTitle>
        <StyledSkillWrap>
          {skills.map((skill, idx) => (
            <StyledSkill key={`${title}-${idx}`}>{skill}</StyledSkill>
          ))}
        </StyledSkillWrap>
        <StyledTerm>{`${start_date} ~ ${end_date}`}</StyledTerm>
        <StyledText>{text}</StyledText>
      </StyledTextureWrap>
    </StyledLi>
  );
};

export default WorkItem;

const StyledLi = styled.li`
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  background-color: #fff;

  width: 400px;
  min-height: 500px;
  border-radius: 10px;
  overflow: hidden;
  padding-bottom: 20px;
`;

const StyledImgWrap = styled.div`
  height: 300px;
  position: relative;
  img {
    width: 100%;
    height: 100%;
  }
`;

const StyledMember = styled.span`
  position: absolute;
  bottom: 5px;
  right: 5px;
  background-color: #fff;
  padding: 10px;
  border: 1px solid ${(props) => props.theme.light.basicFontColor};
  border-radius: 10px;
`;

const StyledTextureWrap = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const StyledTitle = styled.h2`
  width: 100%;
  height: 50px;
  ${(props) => props.theme.flexCenter};
  font-size: 20px;
  font-weight: 700;
  border-bottom: 1px solid ${(props) => props.theme.light.basicFontColor};
`;

const StyledSkillWrap = styled.div`
  width: 100%;
  box-sizing: border-box;
  padding: 10px;
  word-break: keep-all;
  display: flex;
  flex-wrap: wrap;
`;

const StyledSkill = styled.span`
  font-size: 14px;
  padding: 5px;
  border-radius: 20px;
  margin: 5px;
  background: ${(props) => props.theme.light.projectSkillBackColor};
  color: ${(props) => props.theme.light.projectSkillColor};
  word-break: keep-all;
`;

const StyledTerm = styled.h3`
  width: 100%;
  height: 30px;
  box-sizing: border-box;
  padding-right: 10px;
  display: flex;
  justify-content: flex-end;
`;

const StyledText = styled.text`
  display: block;
  width: 100%;
  box-sizing: border-box;
  padding: 0 10px;
  line-height: 1.5;
  word-break: keep-all;
  white-space: pre-line;
`;
