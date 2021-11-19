import { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { IHeaderSliderProps } from "../type";

const characters = ["재치있는", "센스있는", "파급력있는", "세심한"];

const HeaderSlider: React.FC<IHeaderSliderProps> = ({ counter }) => {
  const sliderRef = useRef<HTMLDivElement>(null);
  const [selectedIndex, setSelectedIndex] = useState<number>(1);

  useEffect(() => {
    if (counter) {
      // todo : 마지막 -> 0번으로 갈 때 2배 시간을 대기 후 1번째로 이동
      const interval = setInterval(() => {
        if (!sliderRef.current) {
          return;
        }
        if (selectedIndex < characters.length + 1) {
          setSelectedIndex(selectedIndex + 1);
        } else {
          setSelectedIndex(1);
        }

        if (selectedIndex === characters.length + 1) {
          sliderRef.current.style.transition = `0s`;
          sliderRef.current.style.transform = `translateY(0)`;
        } else {
          sliderRef.current.style.transition = `all 0.5s ease-in-out`;
          sliderRef.current.style.transform = `translateY(-${selectedIndex}00%)`;
        }
      }, 1500);

      return () => {
        clearInterval(interval);
      };
    }
  }, [counter, selectedIndex]);

  return (
    <StyledSliderDiv>
      <StyledItemDiv ref={sliderRef}>
        {characters.map((c, i) => (
          <StyledH1 key={`Slider${i}`}>{c}</StyledH1>
        ))}
        <StyledH1>{characters[0]}</StyledH1>
      </StyledItemDiv>
    </StyledSliderDiv>
  );
};

export default HeaderSlider;

const StyledSliderDiv = styled.div`
  height: 70px;
  overflow: hidden;
`;

const StyledItemDiv = styled.div`
  height: 100%;
`;

const StyledH1 = styled.h1`
  height: 60px;
  ${(props) => props.theme.flexCenter};
  margin-bottom: 10px;
`;
