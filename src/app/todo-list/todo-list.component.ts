import { Component, OnInit, Input, Output } from '@angular/core';
import { TodoItem } from '../TodoItem';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {
  @Input() todos: TodoItem[];
  @Output() done: EventEmitter<any> = new EventEmitter();
  
  constructor() { }

  ngOnInit() {
  }

  fulfilTodo(todoId) :void{
    this.done.emit(todoId);
  }
}
