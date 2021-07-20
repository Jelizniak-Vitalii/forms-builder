import { createAction, props } from '@ngrx/store';

export namespace ExampleActions {
  export const changeStyle = createAction(
    "CHANGE_STYLE",
    props<{ event: string; types: string }>()
  )
}
