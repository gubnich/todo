import {
    Component,
    Input,
    Output,
    EventEmitter,
    ChangeDetectionStrategy
} from "@angular/core";

import { TodoItem } from "../core/models";
import { TodoService } from "./../core/store-facades/todo.service";

@Component({
    selector: "app-todo-list",
    templateUrl: "./todo-list.component.html",
    styleUrls: ["./todo-list.component.scss"],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class TodoListComponent {
    constructor(public todoService: TodoService) {}
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
     *  Method that generates 'done' event
     */
    public fulfilTodo(todoId: number): void {
        this.done.emit(todoId);
    }

    /**
     *  This method is to help Angular to track which items added
     */
    public trackById(index, item) {
        return item.id;
    }
}
