import * as _ from "lodash";

import {
    TodosActions,
    GetTodosSuccessAction,
    FulfilTodoAction,
    AddTodoAction,
    RemoveTodoAction
} from "./todos.actions";
import { TodoItem } from "../../models/index";
import { State } from "./todos.models";

export const initialState: State = {
    counter: 0,
    data: []
};

export function todoReducer(state: State = initialState, action: TodosActions) {
    switch (action.type) {
        case GetTodosSuccessAction:
            return _.assign(state, {
                counter: action.payload.counter,
                data: [...state.data, ...action.payload.data]
            });
        case AddTodoAction:
            const newId: number = state.counter + 1;
            const newTodo: TodoItem = {
                id: newId,
                text: action.payload,
                isDone: false
            };
            return _.assign(state, {
                counter: newId,
                data: [...state.data, newTodo]
            });
        case FulfilTodoAction:
            state.data.find(item => item.id === action.payload).isDone = true;
            return _.assign(state, {
                data: [...state.data]
            });
        case RemoveTodoAction:
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
