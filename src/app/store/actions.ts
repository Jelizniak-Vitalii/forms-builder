import { createAction, props } from '@ngrx/store';

export namespace ExampleActions {
  export const changeStyle = createAction(
    "CHANGE_STYLE",
    props<{ event: string; types: string }>()
  )

  export const initialForm = createAction(
    "INITIAL_FORM_ELEMENT",
    props<{ initialForm: {type: string}[] }>()
  )

  export const saveNewForm = createAction(
    "SAVE_NEW_FORM",
    props<{ newForm: {type: string}[] }>()
  )
}
