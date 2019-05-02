import { Injectable } from "@angular/core";

import { EMPTY } from "rxjs";
import { map, switchMap } from "rxjs/operators";

import { Actions, Effect, ofType } from "@ngrx/effects";

import { TodoService } from "../services/index";
import {
    State,
    FulfilTodo,
    RemoveTodo,
    AddTodo,
    GetTodosSuccess,
    FULFIL_TODO_TOGGLE,
    ADD_TODO,
    REMOVE_TODO,
    GET_TODOS
} from "../store/index";

@Injectable()
export class TodoEffects {
    private actions$: Actions;
    private todoService: TodoService;

    /**
     *  To get all todo items from the local storage via service and add them to the store via dispathing an action
     */
    @Effect()
    public getTodos$: Actions;

    /**
     *  To add new todo item to the local storage via service
     */
    @Effect()
    public addTodo$: Actions;

    /**
     *  To remove selected todo item from the local storage via service
     */
    @Effect()
    public removeTodo$: Actions;

    /**
     *  To mark fulfilled todo item in the local storage via service
     */
    @Effect()
    public fulfilTodoToggle$: Actions;

    constructor(actions: Actions, service: TodoService) {
        this.actions$ = actions;
        this.todoService = service;
        this.getTodos$ = this.actions$.pipe(
            ofType(GET_TODOS),
            map(() => this.todoService.getTodos()),
            map((res: State) => new GetTodosSuccess(res))
        );
        this.addTodo$ = this.actions$.pipe(
            ofType(ADD_TODO),
            switchMap((action: AddTodo) => {
                this.todoService.addTodo(action.payload);
                return EMPTY;
            })
        );
        this.removeTodo$ = this.actions$.pipe(
            ofType(REMOVE_TODO),
            switchMap((action: RemoveTodo) => {
                this.todoService.removeTodo(action.payload);
                return EMPTY;
            })
        );
        this.fulfilTodoToggle$ = this.actions$.pipe(
            ofType(FULFIL_TODO_TOGGLE),
            switchMap((action: FulfilTodo) => {
                this.todoService.fulfilTodoToggle(action.payload);
                return EMPTY;
            })
        );
    }
}
