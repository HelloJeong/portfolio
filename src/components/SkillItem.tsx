import { useEffect, useRef } from "react";
import styled from "styled-components";
import { ISkillType } from "../type";

const SkillItem: React.FC<ISkillType> = ({ img, name, progress, type }) => {
  const itemRef = useRef<HTMLProgressElement>(null);
  useEffect(() => {
    let value = 1;
    const interval = setInterval(() => {
      if (value === progress) {
        clearInterval(interval);
        return;
      }
      if (!itemRef.current) {
        return;
      }
      itemRef.current.value = ++value;
    }, 10);

    return () => {
      clearInterval(interval);
    };
  }, [progress]);

  return (
    <StyledLi>
      <img src={`/images/skill-${img}`} alt={name} />
      <h3>{name}</h3>
      <progress ref={itemRef} value="0" max="100" />
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
  margin-left: auto;
  margin-right: auto;
  img {
    width: 50px;
    height: 100%;
    border-radius: 10px;
  }
  h3 {
    width: 100px;
    height: 100%;
    font-weight: 700;
    display: flex;
    align-items: center;
  }
  progress {
    display: block;
    width: 400px;
    height: 30px;
    appearance: none;
    border-radius: 10px;
    color: ${(props) => props.theme.light.titleFontColor};

    &::-webkit-progress-bar {
      background-color: #eee;
      border-radius: 10px;
    }
    &::-webkit-progress-value {
      background-color: ${(props) => props.theme.light.titleFontColor};
      border-radius: 8px;
    }
  }
`;
