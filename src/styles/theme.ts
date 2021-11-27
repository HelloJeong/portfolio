import { css, DefaultTheme } from "styled-components";

const theme: DefaultTheme = {
  size: {
    mobile: "(max-width: 767px)",
  },
  light: {
    basicFontColor: "#606060",
    navFontColor: "#b9b9b9",
    titleFontColor: "#5f5f5f",
    skillBackColor: "#eaeaea",
    projectBackColor: "#ffebca",
    projectSkillBackColor: "#ffebca",
    projectSkillColor: "#794b3c",
  },
  flexCenter: css`
    display: flex;
    justify-content: center;
    align-items: center;
  `,
};

export default theme;
