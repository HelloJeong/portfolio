import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { RootState } from "../redux/modules";
import { getskill } from "../redux/modules/skill";
import { StyledH1, StyledSection } from "../styles/common";
import { ISkillProps } from "../type";
import SkillItem from "./SkillItem";

const Skill: React.FC<ISkillProps> = ({ id }) => {
  const skills = useSelector((state: RootState) => state.skill.skills);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getskill());
  }, [dispatch]);

  return (
    <StyledSkillSection id={id}>
      <StyledH1>Skill</StyledH1>
      <StyledItemWrap>
        <StyledItemList>
          {skills.map((skill, idx) => {
            return <SkillItem key={`skill${idx}`} {...skill} />;
          })}
        </StyledItemList>
      </StyledItemWrap>
    </StyledSkillSection>
  );
};

export default Skill;

const StyledSkillSection = styled(StyledSection)`
  background-color: ${(props) => props.theme.light.skillBackColor};
`;

const StyledItemWrap = styled.div`
  ${(props) => props.theme.flexCenter};
`;

const StyledItemList = styled.ul`
  display: flex;
  flex-direction: column;
`;
