import * as _ from "lodash";

import { TodosActions, TodosActionTypes } from "./todos.actions";
import { TodoItem } from "../../models/index";
import { State } from "./todos.models";

export const initialState: State = {
    data: []
};

export function todoReducer(state: State = initialState, action: TodosActions) {
    switch (action.type) {
        case TodosActionTypes.AddTodo:
            const newId: number = state.data.length
                ? state.data[state.data.length - 1].id + 1
                : 0;
            const newTodo: TodoItem = {
                id: newId,
                text: action.payload,
                isDone: false
            };
            return _.assign(state, {
                data: [...state.data, newTodo]
            });
        case TodosActionTypes.FulfilTodo:
            state.data.find(item => item.id === action.payload).isDone = true;
            return _.assign(state, {
                data: [...state.data]
            });
        case TodosActionTypes.RemoveTodo:
            const pickedTodoIndex = state.data.findIndex(
                item => item.id === action.payload
            );
            state.data.splice(pickedTodoIndex, 1);
            return _.assign(state, {
                data: [...state.data]
            });
        default:
            return state;
    }
}
