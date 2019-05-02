import {
    Component,
    Input,
    Output,
    EventEmitter,
    ChangeDetectionStrategy
} from "@angular/core";
import { TodoItem } from "../core/index";
import { todoListAnimation } from "./todo-list.animation";

@Component({
    selector: "app-todo-list",
    templateUrl: "./todo-list.component.html",
    styleUrls: ["./todo-list.component.scss"],
    animations: [todoListAnimation],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class TodoListComponent {
    /**
     * Array of todo-items to display
     */
    @Input()
    public todos: Array<TodoItem>;

    /**
     *  The emitter is to pass the 'id' property of todo that has been done
     */
    @Output()
    public toggleDone: EventEmitter<number> = new EventEmitter();

    /**
     *  The emitter is to pass the 'id' property of todo to remove
     */
    @Output()
    public remove: EventEmitter<number> = new EventEmitter();

    /**
     *  Method that generates 'done' event
     */
    public fulfilTodo(todoId: number): void {
        this.toggleDone.emit(todoId);
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
