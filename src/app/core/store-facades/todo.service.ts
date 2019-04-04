import { Injectable } from "@angular/core";

import { Store } from "@ngrx/store";

import { AppState } from "../store/todos";
import { FulfilTodo } from "../store/todos";

@Injectable({
    providedIn: "root"
})
export class TodoService {
    constructor(private store: Store<AppState>) {}

    getTodos() {
        return this.store.select(state => state.todosss.data);
    }

    addTodo(id) {
        this.store.dispatch(new FulfilTodo({ id }));
    }
}
