import "styled-components";

declare module "styled-components" {
  // ThemeProvider theme에 적용할 타입으로, theme의 속성과 동일하게 작성
  export interface DefaultTheme {
    light: {
      basicFontColor: string;
      navFontColor: string;
      titleFontColor: string;
      skillBackColor: string;
      projectBackColor: string;
      projectSkillBackColor: string;
      projectSkillColor: string;
    };
    flexCenter: css;
  }
}
