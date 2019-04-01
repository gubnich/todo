import { Component, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';

@Component({
    selector: 'app-todo-input',
    templateUrl: './todo-input.component.html',
    styleUrls: ['./todo-input.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})

export class TodoInputComponent {
    /**
     *  @newTodo This emitter is to pass inputed text
     */
    @Output()
    public newTodo: EventEmitter<string> = new EventEmitter();

    /**
     *  @add Method that generates newTodo event
     */
    public add(text: string): void {
        event.preventDefault();
        this.newTodo.emit(text);
    }
}
