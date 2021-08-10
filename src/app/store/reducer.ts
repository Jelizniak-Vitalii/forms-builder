export interface State {
  color: string;
  width: string;
  height: string;
  fontSize: string;
  borderColor: string;
  borderRadius: string;
  event: string;
  initialForm: [
    { type: string },
    { type: string },
    { type: string },
    { type: string },
    { type: string },
  ];
  newForm: [];
}

const initialState: State = {
  color: '',
  width: '',
  height: '',
  fontSize: '',
  borderColor: '',
  borderRadius: '',
  event: '',
  initialForm: [
    { type: 'button' },
    { type: 'checkbox' },
    { type: 'textarea' },
    { type: 'select' },
    { type: 'input' },
  ],
  newForm: [],

}

export const reducer = (state = initialState, action: any): State => {
  switch (action.type) {
    case "CHANGE_STYLE":
      return {
        ...state,
        event: action.event,
        [action.types]: action.event }
    case "INITIAL_FORM_ELEMENT":
     return  {
       ...state,
       initialForm: action.initialForm,
     }
    case "SAVE_NEW_FORM":
      return {
        ...state,
        newForm: action.newForm,
      }
    default: return state;
  }
}


