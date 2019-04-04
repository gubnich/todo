import {
    Component,
    Input,
    Output,
    EventEmitter,
    ChangeDetectionStrategy,
    OnInit
} from "@angular/core";
import { Observable } from "rxjs";

import { Store, select } from "@ngrx/store";

import { TodoItem } from "../core/models";
import { FulfilTodo, AddTodo } from "../core/store/todos/todos.actions";
import { State } from "../core/store/todos";

@Component({
    selector: "app-todo-list",
    templateUrl: "./todo-list.component.html",
    styleUrls: ["./todo-list.component.scss"],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class TodoListComponent {
    // todosss$: Observable<any>;
    // check;
    // constructor(private store: Store<State>) {
    //     this.todosss$ = this.store.select(state => state.data);
    //     console.log("todosss", this.todosss$);
    // }

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
