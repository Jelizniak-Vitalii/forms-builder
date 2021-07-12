
export interface State {
  color: string;
  width: string;
  height: string;
  fontSize: string;
  borderColor: string;
  borderRadius: string;

}

const initialState: State = {
  color: '',
  width: '',
  height: '',
  fontSize: '',
  borderColor: '',
  borderRadius: ''

}



export const reducer = (state = initialState, action: any): State => {

  switch (action.type) {
    case "CHANGE_COLOR":
      return {...state,
        color: action.color,
      }
    case "CHANGE_FONT_SIZE":
      return {...state,
        fontSize: action.fontSize,
      }
    case "CHANGE_WIDTH":
      return {...state,
        width: action.width,
      }
    case "CHANGE_HEIGHT":
      return {...state,
        height: action.height,
      }
    case "CHANGE_BORDER_COLOR":
      return {...state,
        borderColor: action.borderColor,
      }
    case "CHANGE_BORDER_RADIUS":
      return  { ...state,
      borderRadius: action.borderRadius}
    default: return state;
  }
}


