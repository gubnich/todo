import { Action } from "@ngrx/store";

export enum TodosActionTypes {
    FulfilTodo = "[Todos] Fulfil Todo",
    AddTodo = "[Todos] Add Todo"
}

export class FulfilTodo implements Action {
    readonly type = TodosActionTypes.FulfilTodo;
    constructor(public payload?: { id: number }) {}
}

export class AddTodo implements Action {
    readonly type = TodosActionTypes.AddTodo;
    constructor(public payload?: { text: string }) {}
}

export type TodosActions = AddTodo | FulfilTodo;
