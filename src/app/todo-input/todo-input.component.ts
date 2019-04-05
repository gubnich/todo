import {
    Component,
    ChangeDetectionStrategy,
    Output,
    EventEmitter
} from "@angular/core";

@Component({
    selector: "app-todo-input",
    templateUrl: "./todo-input.component.html",
    styleUrls: ["./todo-input.component.scss"],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class TodoInputComponent {
    /**
     *  The emitter is to add new todo
     */
    @Output()
    public newTodo: EventEmitter<string> = new EventEmitter();

    /**
     *  Method that generates 'remove' event
     */
    public addTodo(text: string): void {
        event.preventDefault();
        this.newTodo.emit(text);
    }
}
