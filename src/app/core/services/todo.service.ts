import { Injectable } from "@angular/core";

import * as _ from "lodash";

import { State } from "../store/index";
import { TodoItem } from "../models/index";
import { initialState } from "../store/index";

@Injectable()
export class TodoService {
    /**
     *  Gets all todos from the local storage
     */
    public getTodos(): State {
        if (window.localStorage.getItem("todoApp")) {
            return JSON.parse(window.localStorage.getItem("todoApp"));
        } else {
            window.localStorage.setItem(
                "todoApp",
                JSON.stringify(initialState)
            );
            return initialState;
        }
    }

    /**
     *  Adds new todo item to the local storage
     */
    public addTodo(text: string): void {
        const storage = JSON.parse(window.localStorage.getItem("todoApp"));
        const newId: number = storage.counter + 1;
        const newTodo: TodoItem = {
            id: newId,
            text,
            isDone: false
        };

        window.localStorage.setItem(
            "todoApp",
            JSON.stringify(
                _.assign(storage, {
                    counter: newId,
                    data: [...storage.data, newTodo]
                })
            )
        );
    }

    /**
     *  Removes the picked todo item from the local storage
     */
    public removeTodo(id: number): void {
        const storage = JSON.parse(window.localStorage.getItem("todoApp"));
        const pickedTodoIndex = storage.data.findIndex(item => item.id === id);

        storage.data.splice(pickedTodoIndex, 1);
        window.localStorage.setItem(
            "todoApp",
            JSON.stringify(
                _.assign(storage, {
                    data: [...storage.data]
                })
            )
        );
    }

    /**
     *  Marks todo item as done in the local storage
     */
    public fulfilTodo(id: number): void {
        const storage = JSON.parse(window.localStorage.getItem("todoApp"));

        storage.data.find(item => item.id === id).isDone = true;
        window.localStorage.setItem(
            "todoApp",
            JSON.stringify(
                _.assign(storage, {
                    data: [...storage.data]
                })
            )
        );
    }
}
