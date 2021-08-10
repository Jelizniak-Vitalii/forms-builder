import { createFeatureSelector, createSelector} from "@ngrx/store";
import { State } from './reducer'
import { INPUT_TYPES } from "../shared/types/type";

export namespace ExampleSelector {
  const state = createFeatureSelector<State>('example');
  export const  changeStyle = (key: INPUT_TYPES) => createSelector(state, (state) => state[key])

  export const saveNewForm = createSelector(state, (state) => state.newForm)

  export const initialForm = createSelector(state, (state) => state.initialForm)
}
