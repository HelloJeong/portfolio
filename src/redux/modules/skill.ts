import skillFile from "../../skilldata.json";
import { ISkillState } from "../../type";
// 액션 타입을 선언합니다
// 뒤에 as const 를 붙여줌으로써 나중에 액션 객체를 만들게 action.type 의 값을 추론하는 과정에서
// action.type 이 string 으로 추론되지 않고 'counter/INCREASE' 와 같이 실제 문자열 값으로 추론 되도록 해줍니다.

const GETSKILL = "skill/GETSKILL" as const;
const SORT_PROGRESS = "skill/SORT_PROGRESS" as const;
const SORT_TYPE = "skill/SORT_TYPE" as const;

export const getskill = () => ({ type: GETSKILL });
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

function reducer(state: ISkillState = initialState, action: SkillAction): ISkillState {
  switch (action.type) {
    case GETSKILL:
      const skillList: ISkillState = skillFile;
      return skillList;
    case SORT_PROGRESS:
      return state;
    case SORT_TYPE:
      return state;
    default:
      return state;
  }
}

export default reducer;
