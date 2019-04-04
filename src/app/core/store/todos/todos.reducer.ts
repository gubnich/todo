import { createSelector } from "@ngrx/store";

import { TodosActions, TodosActionTypes } from "./todos.actions";
import { State } from "./todos.models";

export const initialState = {
    data: [{ id: 1, text: "initial", isDone: false }]
};

export const selectFeature = (state: State) => state;

export const selectData = createSelector(
    selectFeature,
    (state: State) => state
);

export function todoReducer(state = initialState, action: TodosActions) {
    switch (action.type) {
        case TodosActionTypes.AddTodo:
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
            return state;
    }
}
