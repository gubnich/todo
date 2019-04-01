import { Component, ChangeDetectionStrategy } from '@angular/core';

import { TodoItem } from './core/models';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})

export class AppComponent {
    /**
     *  @todos Stores todo-items
     */
    public todos: TodoItem[] = [];

    /**
     *  @addTodo Adds new todo-item to array of todos
     */
    public addTodo(todo: string): void {
        const newId: number = this.todos.length ? this.todos[this.todos.length - 1].id + 1 : 0;
        this.todos = [
            ...this.todos,
            {
                id: newId,
                text: todo,
                isDone: false
            }
        ];
    }

    /**
     *  @fulfilTodo Changes the value of isDone property to true (todo is done)
     */
    public fulfilTodo(id: number): void {
        this.todos[id].isDone = true;
    }
}
