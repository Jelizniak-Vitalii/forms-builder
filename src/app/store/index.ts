export interface State {
  color: string;
  width: string;
  height: string;
  fontSize: string;
  borderColor: string;
  borderRadius: string;
  event: string;
}

const initialState: State = {
  color: '',
  width: '',
  height: '',
  fontSize: '',
  borderColor: '',
  borderRadius: '',
  event: '',
}

export const reducer = (state = initialState, action: any): State => {
  switch (action.type) {
    case "CHANGE_STYLE":
      return {
        ...state,
        event: action.event,
        [action.types]: action.event }
    default: return state;
  }
}


