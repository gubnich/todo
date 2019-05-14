import { Component, ChangeDetectionStrategy, OnInit } from "@angular/core";

import { Observable } from "rxjs";
import { Store } from "@ngrx/store";

import {
    FULFIL_TODO_TOGGLE,
    ADD_TODO,
    REMOVE_TODO,
    GET_TODOS
} from "../core/store/index";
import { TodoItem, AppState } from "../core/index";

@Component({
    selector: "app-todo",
    templateUrl: "./todo.component.html",
    styleUrls: ["./todo.component.scss"],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class TodoComponent implements OnInit {
    private store: Store<AppState>;

    /**
     *  Stores todo-items
     */
    public todos$: Observable<Array<TodoItem>>;

    constructor(store: Store<AppState>) {
        this.store = store;
    }

    public ngOnInit() {
        this.store.dispatch({ type: GET_TODOS });
        this.todos$ = this.store.select(state => state.todoApp.data);
    }
    /**
     *  To change the value of isDone property to true (todo is done)
     */
    public fulfilTodoToggle(id: number): void {
        this.store.dispatch({
            type: FULFIL_TODO_TOGGLE,
            payload: id
        });
    }

    /**
     *  To remove todo item
     */
    public removeTodo(id: number): void {
        this.store.dispatch({
            type: REMOVE_TODO,
            payload: id
        });
    }

    /**
     *  To add todo item
     */
    public addTodo(text: string): void {
        this.store.dispatch({ type: ADD_TODO, payload: text });
    }
}
