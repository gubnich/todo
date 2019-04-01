import { Component, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';

import { TodoItem } from '../core/models';

@Component({
    selector: 'app-todo-list',
    templateUrl: './todo-list.component.html',
    styleUrls: ['./todo-list.component.scss'],
    // changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TodoListComponent {
    /**
     *  @todos Array of todo-items to display
     */
    @Input()
    private todos: TodoItem[];
    /**
     *  @done The emitter is to pass the 'id' property of todo that has been done
     */
    @Output()
    private done: EventEmitter<number> = new EventEmitter();
    /**
     *  @fulfilTodo Method that generates 'done' event
     */
    private fulfilTodo(todoId: number): void {
        this.done.emit(todoId);
    }
    public trackById(index, item) {
        console.log('track', item.id);
        return item.id;
    }
}
