import { Action } from "@ngrx/store";
import { State } from "./todos.models";

export const GetTodosAction = "[Todos] Get Todos";
export const GetTodosSuccessAction = "[Todos] Get Todos Success";
export const FulfilTodoAction = "[Todos] Fulfil Todo";
export const AddTodoAction = "[Todos] Add Todo";
export const RemoveTodoAction = "[Todos] Remove Todo";

export class GetTodos implements Action {
    readonly type = GetTodosAction;
}

export class GetTodosSuccess implements Action {
    readonly type = GetTodosSuccessAction;
    public payload: State;

    constructor(payload: State) {
        this.payload = payload;
    }
}

export class FulfilTodo implements Action {
    readonly type = FulfilTodoAction;
    public payload: number;

    constructor(payload: number) {
        this.payload = payload;
    }
}

export class AddTodo implements Action {
    readonly type = AddTodoAction;
    public payload: string;

    constructor(payload: string) {
        this.payload = payload;
    }
}

export class RemoveTodo implements Action {
    readonly type = RemoveTodoAction;
    public payload: number;

    constructor(payload: number) {
        this.payload = payload;
    }
}

export type TodosActions =
    | AddTodo
    | FulfilTodo
    | RemoveTodo
    | GetTodos
    | GetTodosSuccess;
