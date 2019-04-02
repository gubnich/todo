import { Action } from "@ngrx/store";
import { TodosActionTypes, AddTodo } from "./todos.actions";
import { TodoItem } from "../../models/TodoItem";

export interface State {
    data: TodoItem[];
}
export const initialState = { data: [{ id: 1, text: "dfdf", isDone: false }] };

export function todoReducer(state = initialState, action: AddTodo) {
    switch (action.type) {
        // case TodosActionTypes.LoadTodos:
        //     return state;

        case TodosActionTypes.AddTodo:
            console.log(state);
            console.log(action);
            return {
                data: [
                    ...state.data,
                    { id: 1, text: action.payload, isDone: false }
                ]
            };

        default:
            console.log(state);
            return state;
    }
}
