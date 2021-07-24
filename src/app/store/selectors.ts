import { createFeatureSelector, createSelector} from "@ngrx/store";
import { State } from './index'
import { INPUT_TYPES } from "../shared/types/type";

export namespace ExampleSelector {
    const state = createFeatureSelector<State>('example');
    export const  changeStyle = (key: INPUT_TYPES) => createSelector(state, (state) => state[key])
}
