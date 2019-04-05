import { Component, ChangeDetectionStrategy } from "@angular/core";

import { Observable } from "rxjs";

import { TodoItem, TodoService } from "./core/index";

@Component({
    selector: "app-root",
    templateUrl: "./app.component.html",
    styleUrls: ["./app.component.scss"],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {
    private todoService: TodoService;

    /**
     *  Stores todo-items
     */
    public todos$: Observable<Array<TodoItem>>;

    constructor(todoService: TodoService) {
        this.todoService = todoService;
        this.todos$ = this.todoService.getTodos();
    }

    /**
     *  Changes the value of isDone property to true (todo is done)
     */
    public fulfilTodo(id: number): void {
        this.todoService.fulfilTodo(id);
    }

    /**
     *  Removes todo via todoService
     */
    public removeTodo(id: number): void {
        this.todoService.removeTodo(id);
    }

    /**
     *  Adds todo via todoService
     */
    public addTodo(text: string): void {
        this.todoService.addTodo(text);
    }
}
