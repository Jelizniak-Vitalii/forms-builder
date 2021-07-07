import { createAction, props } from '@ngrx/store';


export namespace ExampleActions {
    export const changeColor = createAction(
        "CHANGE_COLOR",
        props<{ color: string }>()
    );
    export const changeFontSize = createAction(
        "CHANGE_FONT_SIZE",
        props<{ fontSize: string }>()
    );
    export const changeWidth = createAction(
        "CHANGE_WIDTH",
        props<{ width: string }>()
    );
    export const changeHeight = createAction(
        "CHANGE_HEIGHT",
        props<{ height: string }>()
    );
    export const changeBorderStyle = createAction(
        "CHANGE_BORDER_STYLE",
        props<{ borderStyle: string }>()
    );    
}