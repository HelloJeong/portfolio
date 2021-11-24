import { css, DefaultTheme } from "styled-components";

const theme: DefaultTheme = {
  light: {
    basicFontColor: "#606060",
    navFontColor: "#b9b9b9",
    titleFontColor: "#5f5f5f",
    skillBackColor: "#c4c4c4",
    projectBackColor: "#ffb2b2",
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
