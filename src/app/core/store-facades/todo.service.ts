import { Injectable } from "@angular/core";

import { Store } from "@ngrx/store";

import { Observable } from "rxjs";

import { FulfilTodo, RemoveTodo, AddTodo, AppState } from "../store/todos";
import { TodoItem } from "./../models";

@Injectable()
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
    addTodo(text: string): void {
        this.store.dispatch(new AddTodo({ text }));
    }

    /**
     *  Removes the picked todo from the store
     */
    removeTodo(id: number): void {
        this.store.dispatch(new RemoveTodo({ id }));
    }

    /**
     *  Marks todo as done
     */
    fulfilTodo(id: number): void {
        this.store.dispatch(new FulfilTodo({ id }));
    }
}
