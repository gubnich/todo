import { Component, ChangeDetectionStrategy } from '@angular/core';

import { TodoItem } from './core/models';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})

export class AppComponent {
    /**
     *  @todos Stores todo-items
     */
    private todos: TodoItem[] = [];
    /**
     *  @addTodo Adds new todo-item to array of todos
     */
    private addTodo(todo: string): void {
        this.todos.push({
            id: this.todos.length + 1,
            text: todo,
            isDone: false
        });
    }
    /**
     *  @fulfilTodo Changes the value of isDone property to true (todo is done)
     */
    private fulfilTodo(id: number): void {
        this.todos[id - 1].isDone = true;
    }
}
