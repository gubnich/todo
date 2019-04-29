import { Component, ChangeDetectionStrategy, OnInit } from "@angular/core";

import { Observable } from "rxjs";
import { Store } from "@ngrx/store";

import { TodoItem, AppState } from "./core/index";

@Component({
    selector: "app-root",
    templateUrl: "./app.component.html",
    styleUrls: ["./app.component.scss"],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent implements OnInit {
    private store: Store<AppState>;

    /**
     *  Stores todo-items
     */
    public todos$: Observable<Array<TodoItem>>;

    constructor(store: Store<AppState>) {
        this.store = store;
    }

    public ngOnInit() {
        this.store.dispatch({ type: "[Todos] Get Todos" });
        this.todos$ = this.store.select(state => state.todoApp.data);
    }
    /**
     *  To change the value of isDone property to true (todo is done)
     */
    public fulfilTodo(id: number): void {
        this.store.dispatch({
            type: "[Todos] Fulfil Todo",
            payload: id
        });
    }

    /**
     *  To remove todo item
     */
    public removeTodo(id: number): void {
        this.store.dispatch({
            type: "[Todos] Remove Todo",
            payload: id
        });
    }

    /**
     *  To add todo item
     */
    public addTodo(text: string): void {
        this.store.dispatch({ type: "[Todos] Add Todo", payload: text });
    }
}
