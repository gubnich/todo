import {
    Component,
    Input,
    Output,
    EventEmitter,
    ChangeDetectionStrategy
} from "@angular/core";

import { TodoItem, TodoService } from "../core";

@Component({
    selector: "app-todo-list",
    templateUrl: "./todo-list.component.html",
    styleUrls: ["./todo-list.component.scss"],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class TodoListComponent {
    /**
     *  The service to interact with store
     */
    public todoService: TodoService;

    /**
     * Array of todo-items to display
     */
    @Input()
    public todos: TodoItem[];

    /**
     *  The emitter is to pass the 'id' property of todo that has been done
     */
    @Output()
    public done: EventEmitter<number> = new EventEmitter();

    /**
     *  The emitter is to pass the 'id' property of todo to remove
     */
    @Output()
    public remove: EventEmitter<number> = new EventEmitter();

    constructor(todoService: TodoService) {
        this.todoService = todoService;
    }

    /**
     *  Method that generates 'done' event
     */
    public fulfilTodo(todoId: number): void {
        this.done.emit(todoId);
    }

    /**
     *  Method that generates 'remove' event
     */
    public removeTodo(todoId: number): void {
        this.remove.emit(todoId);
    }

    /**
     *  This method is to help Angular to track which items added
     */
    public trackById(index, item) {
        return item.id;
    }
}
