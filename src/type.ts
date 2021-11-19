interface ICommonProp {
  id: string;
}

// Headers

export interface IHeaderProps extends ICommonProp {}

export interface IHeaderSliderProps {
  counter: boolean;
}

// Nav

// About
export interface IAboutProps extends ICommonProp {}

// Skills
export interface ISkillProps extends ICommonProp {}

// Works&Projects
export interface IWorkProps extends ICommonProp {}

// Contact
export interface IContactProps extends ICommonProp {}
