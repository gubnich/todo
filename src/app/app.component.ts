import { Component, ChangeDetectionStrategy } from "@angular/core";

import { Store } from "@ngrx/store";

import { Observable } from "rxjs";
import { tap } from "rxjs/operators";

import { TodoItem } from "./core/models";
import { State, AppState } from "./core/store/todos";
import { FulfilTodo, AddTodo } from "./core/store/todos/todos.actions";

@Component({
    selector: "app-root",
    templateUrl: "./app.component.html",
    styleUrls: ["./app.component.scss"],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {
    private store: Store<AppState>;
    /**
     *  Stores todo-items
     */
    public todos$: Observable<TodoItem[]>;

    // /**
    //  *  Changes the value of isDone property to true (todo is done)
    //  */
    public fulfilTodo(id: number): void {
        // this.todos[id].isDone = true;
        this.store.dispatch(new FulfilTodo({ id }));
    }

    constructor(store: Store<AppState>) {
        this.store = store;
        this.todos$ = store
            .select(state => state.todosss.data)
            .pipe(tap(todos => console.log("todos from store", todos)));
    }
}
