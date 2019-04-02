import {
    Component,
    Output,
    EventEmitter,
    ChangeDetectionStrategy,
    OnInit
} from "@angular/core";

import { Store, select } from "@ngrx/store";

import { LoadTodoss, AddTodo } from "../core/store/todos/todos.actions";
import { State } from "../core/store/todos/todos.reducer";

@Component({
    selector: "app-todo-input",
    templateUrl: "./todo-input.component.html",
    styleUrls: ["./todo-input.component.scss"]
    // changeDetection: ChangeDetectionStrategy.OnPush
})
export class TodoInputComponent implements OnInit {
    constructor(private store: Store<State>) {}
    /**
     * This emitter is to pass inputed text
     */
    @Output()
    public newTodo: EventEmitter<string> = new EventEmitter();

    ngOnInit() {
        console.log(this.store);
    }
    /**
     *  Method that generates newTodo event
     */
    public add(text: string): void {
        // event.preventDefault();
        // this.newTodo.emit(text);

        this.store.dispatch(new AddTodo({ text }));
    }
}
