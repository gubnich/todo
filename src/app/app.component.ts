import { Component, ChangeDetectionStrategy } from "@angular/core";

import { Observable } from "rxjs";

import { TodoItem } from "./core/models";
import { TodoService } from "./core/store-facades/todo.service";

@Component({
    selector: "app-root",
    templateUrl: "./app.component.html",
    styleUrls: ["./app.component.scss"],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {
    constructor(private todoService: TodoService) {
        this.todos$ = this.todoService.getTodos();
    }

    /**
     *  Stores todo-items
     */
    public todos$: Observable<TodoItem[]>;

    /**
     *  Changes the value of isDone property to true (todo is done)
     */
    public fulfilTodo(id: number): void {
        this.todoService.addTodo(id);
    }
}
