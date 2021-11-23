import workFile from "../../workdata.json";
import { IWorkState } from "../../type";

const GET_WORK = "work/GET_WORK" as const;

export const getwork = () => ({ type: GET_WORK });

// 모든 액션 겍체들에 대한 타입을 준비해줍니다.
// ReturnType<typeof _____> 는 특정 함수의 반환값을 추론해줍니다
// 상단부에서 액션타입을 선언 할 떄 as const 를 하지 않으면 이 부분이 제대로 작동하지 않습니다.
type WorkAction = ReturnType<typeof getwork>;

const initialState: IWorkState = { works: [] };

function reducer(state: IWorkState = initialState, action: WorkAction): IWorkState {
  switch (action.type) {
    case GET_WORK:
      const skillList: IWorkState = workFile;
      return skillList;
    default:
      return state;
  }
}

export default reducer;
