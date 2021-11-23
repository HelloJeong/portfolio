import skillFile from "../../skilldata.json";
import { ISkillState, ISkillType } from "../../type";
// 액션 타입을 선언합니다
// 뒤에 as const 를 붙여줌으로써 나중에 액션 객체를 만들게 action.type 의 값을 추론하는 과정에서
// action.type 이 string 으로 추론되지 않고 'counter/INCREASE' 와 같이 실제 문자열 값으로 추론 되도록 해줍니다.

const GET_SKILL = "skill/GET_SKILL" as const;
const SORT_PROGRESS = "skill/SORT_PROGRESS" as const;
const SORT_TYPE = "skill/SORT_TYPE" as const;

export const getskill = () => ({ type: GET_SKILL });
export const sortProgress = () => ({ type: SORT_PROGRESS });
export const sortType = () => ({ type: SORT_TYPE });

// 모든 액션 겍체들에 대한 타입을 준비해줍니다.
// ReturnType<typeof _____> 는 특정 함수의 반환값을 추론해줍니다
// 상단부에서 액션타입을 선언 할 떄 as const 를 하지 않으면 이 부분이 제대로 작동하지 않습니다.
type SkillAction =
  | ReturnType<typeof getskill>
  | ReturnType<typeof sortProgress>
  | ReturnType<typeof sortType>;

const initialState: ISkillState = { skills: [] };

function compareType(a: ISkillType, b: ISkillType): number {
  const typeA = a.type.toUpperCase();
  const typeB = b.type.toUpperCase();
  if (typeA < typeB) {
    return 1;
  }
  if (typeA > typeB) {
    return -1;
  }
  return 0;
}

function reducer(state: ISkillState = initialState, action: SkillAction): ISkillState {
  switch (action.type) {
    case GET_SKILL:
      const skillList: ISkillState = skillFile;
      return skillList;
    case SORT_PROGRESS:
      return {
        ...state,
        skills: state.skills.sort((a, b) => b.progress - a.progress),
      };
    case SORT_TYPE:
      return {
        ...state,
        skills: state.skills.sort(compareType),
      };
    default:
      return state;
  }
}

export default reducer;
