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

// redux

// skill
export interface ISkillType {
  img: string;
  name: string;
  progress: number;
  type: string;
}

export interface ISkillState {
  skills: ISkillType[];
}

// work
export interface IWorkType {
  img: string;
  title: string;
  member: number;
  skills: string[];
  start_date: string;
  end_date: string;
  text: string;
}

export interface IWorkState {
  works: IWorkType[];
}
