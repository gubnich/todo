import { Action } from "@ngrx/store";
import { createSelector } from "@ngrx/store";

import { TodosActionTypes, AddTodo, FulfilTodo } from "./todos.actions";
import { AppState, State } from "./todos.models";

export const initialState = {
    data: [{ id: 1, text: "initial", isDone: false }]
};

export const selectFeature = (state: State) => state;

export const selectData = createSelector(
    selectFeature,
    (state: State) => state
);

export function todoReducer(state = initialState, action) {
    switch (action.type) {
        case TodosActionTypes.AddTodo:
            console.log(state);
            console.log(action);
            const newId: number = state.data.length
                ? state.data[state.data.length - 1].id + 1
                : 0;
            return {
                data: [
                    ...state.data,
                    { id: newId, text: action.payload.text, isDone: false }
                ]
            };
        case TodosActionTypes.FulfilTodo:
            state.data.find(
                item => item.id === action.payload.id
            ).isDone = true;
            return {
                data: [...state.data]
            };
        default:
            console.log(state);
            return state;
    }
}
