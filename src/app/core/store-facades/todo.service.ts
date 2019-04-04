import { Injectable } from "@angular/core";

import { Store } from "@ngrx/store";

import { Observable } from "rxjs";

import { AppState } from "../store/todos";
import { FulfilTodo } from "../store/todos";
import { TodoItem } from "./../models";

@Injectable({
    providedIn: "root"
})
export class TodoService {
    constructor(private store: Store<AppState>) {}

    /**
     *  Gets all todos from the store
     */
    getTodos(): Observable<TodoItem[]> {
        return this.store.select(state => state.todosss.data);
    }

    /**
     *  Adds new todo to the store
     */
    addTodo(id: number) {
        this.store.dispatch(new FulfilTodo({ id }));
    }
}
