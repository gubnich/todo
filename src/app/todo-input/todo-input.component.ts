import { Component, OnInit, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-todo-input',
  templateUrl: './todo-input.component.html',
  styleUrls: ['./todo-input.component.css']
})
export class TodoInputComponent implements OnInit {
  @Output() newTodo: EventEmitter<any> = new EventEmitter();
  
  constructor() { }

  ngOnInit() {
  }

  add(text): void {
    this.newTodo.emit(text);
  }
  
}
