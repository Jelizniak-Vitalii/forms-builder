import { createFeatureSelector, createSelector} from "@ngrx/store";
import { State } from './index'

export namespace ExampleSelector {
    export const state = createFeatureSelector<State>('example');
    export const color = createSelector(state, (state) => state.color)
    export const width = createSelector(state, (state) => state.width)
    export const height = createSelector(state, (state) => state.height)
    export const fontSize = createSelector(state, (state) => state.fontSize)
    export const borderColor = createSelector(state, (state) => state.borderColor)
    export const borderRadius = createSelector(state, (state) => state.borderRadius)
}
