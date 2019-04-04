import {
    Component,
    Output,
    EventEmitter,
    ChangeDetectionStrategy,
    OnInit
} from "@angular/core";

import { Store } from "@ngrx/store";

import { AddTodo } from "../core/store/todos/todos.actions";
import { State } from "../core/store/todos";

@Component({
    selector: "app-todo-input",
    templateUrl: "./todo-input.component.html",
    styleUrls: ["./todo-input.component.scss"],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class TodoInputComponent {
    constructor(private store: Store<State>) {}
    /**
     * This emitter is to pass inputed text
     */
    // @Output()
    // public newTodo: EventEmitter<string> = new EventEmitter();

    /**
     *  Method that generates newTodo event
     */
    public add(text: string): void {
        event.preventDefault();
        this.store.dispatch(new AddTodo({ text }));
    }
}
