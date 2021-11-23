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
  return <StyledLi>{title}</StyledLi>;
};

export default WorkItem;

const StyledLi = styled.li`
  ${(props) => props.theme.flexCenter};
  flex-direction: column;

  width: 300px;
  height: 500px;
`;
