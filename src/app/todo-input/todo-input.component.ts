import { Component, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';

@Component({
    selector: 'app-todo-input',
    templateUrl: './todo-input.component.html',
    styleUrls: ['./todo-input.component.css'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})

export class TodoInputComponent {
    /**
     *  @newTodo This emitter is to pass inputed text
     */
    @Output()
    private newTodo: EventEmitter<string> = new EventEmitter();
    /**
     *  @add Method that generates newTodo event
     */
    private add(text: string): void {
        this.newTodo.emit(text);
    }
}
