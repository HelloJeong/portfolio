import styled from "styled-components";
import { ISkillType } from "../type";

const SkillItem: React.FC<ISkillType> = ({ img, name, progress, type }) => {
  return (
    <StyledLi>
      <img src={`images/${img}`} />
      <h3>{name}</h3>
      <progress value={progress} max="100"></progress>
    </StyledLi>
  );
};

export default SkillItem;

const StyledLi = styled.li`
  height: 50px;
  display: flex;
  align-items: center;
  flex-wrap: nowrap;
  gap: 30px;
  img {
    width: 50px;
    height: 100%;
  }
  h3 {
    width: 100px;
    height: 100%;
    display: flex;
    align-items: center;
  }
  progress {
    width: 400px;
    height: 30px;
  }
`;
