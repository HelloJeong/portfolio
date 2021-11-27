import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { RootState } from "../redux/modules";
import { getskill, sortBefore, sortProgress, sortType } from "../redux/modules/skill";
import { StyledH1, StyledInnerColumnWrap, StyledSection } from "../styles/common";
import { ISkillProps } from "../type";
import SkillItem from "./SkillItem";

const Skill: React.FC<ISkillProps> = ({ id }) => {
  const [sortState, setSortState] = useState<boolean>(false); // t : 주제, f : 수치

  const skills = useSelector((state: RootState) => state.skill.skills);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getskill());
  }, [dispatch]);

  return (
    <StyledSkillSection id={id}>
      <StyledInnerColumnWrap>
        <StyledH1>Skill</StyledH1>
        <StyledH3>- 현재 {sortState ? "주제" : "수치"}별 정렬 상태 -</StyledH3>
        <StyledH3>
          <button onClick={onClickSort}>정렬 바꾸기</button>
        </StyledH3>
        <StyledItemWrap>
          <StyledItemList>
            {skills.map((skill, idx) => {
              return <SkillItem key={`skill${idx}`} {...skill} />;
            })}
          </StyledItemList>
        </StyledItemWrap>
      </StyledInnerColumnWrap>
    </StyledSkillSection>
  );

  function onClickSort() {
    dispatch(sortBefore());

    const stateFunc = sortState ? sortProgress : sortType;

    setTimeout(() => {
      dispatch(stateFunc());
    }, 0);

    setSortState(!sortState);
  }
};

export default Skill;

const StyledSkillSection = styled(StyledSection)`
  background-color: ${(props) => props.theme.light.skillBackColor};
`;

const StyledH3 = styled.h3`
  ${(props) => props.theme.flexCenter};
  color: ${(props) => props.theme.light.titleFontColor};
  font-size: 20px;
  margin-bottom: 30px;

  button {
    box-sizing: border-box;
    cursor: pointer;
    outline: none;
    border: 1px solid #404040;
    border-radius: 10px;
    padding: 10px;
    background-color: transparent;
    font-size: 16px;
    color: ${(props) => props.theme.light.titleFontColor};
    transition: 0.3s;

    &:hover {
      color: #000000;
      background-color: #fff;
    }
  }
`;

const StyledItemWrap = styled.div`
  ${(props) => props.theme.flexCenter};
`;

const StyledItemList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 30px;
`;
