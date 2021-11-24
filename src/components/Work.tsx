import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { RootState } from "../redux/modules";
import { getwork } from "../redux/modules/work";
import { StyledH1, StyledInnerColumnWrap, StyledSection } from "../styles/common";
import { IWorkProps } from "../type";
import WorkItem from "./WorkItem";

const Work: React.FC<IWorkProps> = ({ id }) => {
  const works = useSelector((state: RootState) => state.work.works);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getwork());
  }, [dispatch]);

  return (
    <StyledWorkSection id={id}>
      <StyledInnerColumnWrap>
        <StyledH1>Work&amp;Project</StyledH1>
        <StyledItemWrap>
          <StyledItemList as="ul">
            {works
              .slice(0)
              .reverse()
              .map((work, idx) => {
                return <WorkItem key={`work${idx}`} {...work} />;
              })}
          </StyledItemList>
        </StyledItemWrap>
      </StyledInnerColumnWrap>
    </StyledWorkSection>
  );
};

export default Work;

const StyledWorkSection = styled(StyledSection)`
  background-color: ${(props) => props.theme.light.projectBackColor};
`;

const StyledItemWrap = styled.div`
  ${(props) => props.theme.flexCenter};
  margin-bottom: 30px;
`;

const StyledItemList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 30px;
`;
