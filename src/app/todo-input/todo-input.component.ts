import {
    Component,
    ChangeDetectionStrategy,
    Output,
    EventEmitter
} from "@angular/core";

import {
    todoInputAnimation,
    todoInputAnimationStart,
    todoInputAnimationEnd
} from "./todo-input.animation";

@Component({
    selector: "app-todo-input",
    templateUrl: "./todo-input.component.html",
    styleUrls: ["./todo-input.component.scss"],
    animations: [todoInputAnimation],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class TodoInputComponent {
    /**
     *  To contain current state of the animation
     */
    public alertTrigger: string;

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
            this.alertTrigger = todoInputAnimationEnd;
        }
    }

    /**
     *  Sets the animation trigger to initial state in order to reuse the animation again next time
     */
    public resetAnimation(): void {
        this.alertTrigger = todoInputAnimationStart;
    }
}
