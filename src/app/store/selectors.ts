import { createFeatureSelector, createSelector} from "@ngrx/store";
import { State } from './index'
import { types } from "../builder/portalmenu/portal-menu.component";

export namespace ExampleSelector {
    const state = createFeatureSelector<State>('example');
    export const  changeStyle = (key: types) => createSelector(state, (state) => state[key])
}
