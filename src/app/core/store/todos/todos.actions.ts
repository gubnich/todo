import { Action } from "@ngrx/store";

export enum TodosActionTypes {
    LoadTodos = "[Todos] Load Todos",
    AddTodo = "[Todos] Add Todo"
}

export class LoadTodoss implements Action {
    readonly type = TodosActionTypes.LoadTodos;
}

export class AddTodo implements Action {
    readonly type = TodosActionTypes.AddTodo;
    constructor(public payload?: { text: string }) {}
}

export type TodosActions = AddTodo;
