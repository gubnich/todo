import {
    Component,
    ChangeDetectionStrategy,
    Output,
    EventEmitter
} from "@angular/core";

import { todoInputAnimation } from "./todo-input.animation";

@Component({
    selector: "app-todo-input",
    templateUrl: "./todo-input.component.html",
    styleUrls: ["./todo-input.component.scss"],
    animations: [todoInputAnimation],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class TodoInputComponent {
    public alert: string;
    /**
     *  The emitter is to add new todo
     */
    @Output()
    public newTodo: EventEmitter<string> = new EventEmitter();

    /**
     *  Method that generates 'remove' event. It has an animation side effect
     */
    public addTodo(text: string): void {
        event.preventDefault(); // tslint:disable-line
        if (text) {
            this.newTodo.emit(text);
        } else {
            this.alert = "end";
        }
    }
    public resetAnimation() {
        this.alert = "start";
    }
}
