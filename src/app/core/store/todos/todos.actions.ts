import { Action } from "@ngrx/store";
import { State } from "./todos.models";

export const GET_TODOS: string = "[Todos] Get Todos";
export const GET_TODOS_SUCCESS: string = "[Todos] Get Todos Success";
export const FULFIL_TODO: string = "[Todos] Fulfil Todo";
export const ADD_TODO: string = "[Todos] Add Todo";
export const REMOVE_TODO: string = "[Todos] Remove Todo";

export class GetTodos implements Action {
    readonly type = GET_TODOS;
}

export class GetTodosSuccess implements Action {
    readonly type = GET_TODOS_SUCCESS;
    public payload: State;

    constructor(payload: State) {
        this.payload = payload;
    }
}

export class FulfilTodo implements Action {
    readonly type = FULFIL_TODO;
    public payload: number;

    constructor(payload: number) {
        this.payload = payload;
    }
}

export class AddTodo implements Action {
    readonly type = ADD_TODO;
    public payload: string;

    constructor(payload: string) {
        this.payload = payload;
    }
}

export class RemoveTodo implements Action {
    readonly type = REMOVE_TODO;
    public payload: number;

    constructor(payload: number) {
        this.payload = payload;
    }
}

export type TodosActions =
    | AddTodo
    | FulfilTodo
    | RemoveTodo
    | GetTodosSuccess
    | GetTodos;
