
export interface State {
  color: string;
  width: string;
  height: string;
  fontSize: string;
  borderStyle: string;

}

const initialState: State = {
  color: '',
  width: '',
  height: '',
  fontSize: '',
  borderStyle: '',

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
    case "CHANGE_BORDER_STYLE":
      return {...state,
        borderStyle: action.borderStyle,
      }
    default: return state;
  }
}


