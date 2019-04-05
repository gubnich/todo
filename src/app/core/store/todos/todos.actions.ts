import { Action } from "@ngrx/store";
// import { PayloadId, PayloadText } from "./todos.models";

export enum TodosActionTypes {
    FulfilTodo = "[Todos] Fulfil Todo",
    AddTodo = "[Todos] Add Todo",
    RemoveTodo = "[Todos] Remove Todo"
}

export class FulfilTodo implements Action {
    readonly type = TodosActionTypes.FulfilTodo;
    public payload: number;

    constructor(payload: number) {
        this.payload = payload;
    }
}

export class AddTodo implements Action {
    readonly type = TodosActionTypes.AddTodo;
    public payload: string;

    constructor(payload: string) {
        this.payload = payload;
    }
}

export class RemoveTodo implements Action {
    readonly type = TodosActionTypes.RemoveTodo;
    public payload: number;

    constructor(payload: number) {
        this.payload = payload;
    }
}

export type TodosActions = AddTodo | FulfilTodo | RemoveTodo;
