import { Injectable } from "@angular/core";

import { EMPTY } from "rxjs";
import { map, switchMap } from "rxjs/operators";

import { Actions, Effect, ofType } from "@ngrx/effects";

import { TodoService } from "../store-facades/index";
import {
    State,
    FulfilTodo,
    RemoveTodo,
    AddTodo,
    GetTodosSuccess
} from "../store/index";

@Injectable()
export class TodoEffects {
    /**
     *  To get all todo items from the local storage via service and add them to the store via dispathing an action
     */
    @Effect()
    getTodos$ = this.actions$.pipe(
        ofType("[Todos] Get Todos"),
        map(() => this.todoService.getTodos()),
        map((res: State) => new GetTodosSuccess(res))
    );

    /**
     *  To add new todo item to the local storage via service
     */
    @Effect()
    addTodo$ = this.actions$.pipe(
        ofType("[Todos] Add Todo"),
        switchMap((action: AddTodo) => {
            this.todoService.addTodo(action.payload);
            return EMPTY;
        })
    );

    /**
     *  To remove selected todo item from the local storage via service
     */
    @Effect()
    removeTodo$ = this.actions$.pipe(
        ofType("[Todos] Remove Todo"),
        switchMap((action: RemoveTodo) => {
            this.todoService.removeTodo(action.payload);
            return EMPTY;
        })
    );

    /**
     *  To mark fulfilled todo item in the local storage via service
     */
    @Effect()
    fulfilTodo$ = this.actions$.pipe(
        ofType("[Todos] Fulfil Todo"),
        switchMap((action: FulfilTodo) => {
            this.todoService.fulfilTodo(action.payload);
            return EMPTY;
        })
    );

    constructor(private actions$: Actions, private todoService: TodoService) {}
}
