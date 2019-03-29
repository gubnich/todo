import { Component } from '@angular/core';
import { TodoItem } from './TodoItem';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  todos: TodoItem[] = [];
  title = 'todo';

  addTodo(todo) :void {
    this.todos.push({
      id: this.todos.length + 1,
      text: todo,
      status: false
    })
  };
  
  fulfilTodo(id) :void {
    this.todos[id-1].status = true;
  }
}
