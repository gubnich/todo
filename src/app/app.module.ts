import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { TodoInputComponent } from "./todo-input/todo-input.component";
import { TodoListComponent } from "./todo-list/todo-list.component";
import { StoreModule } from "@ngrx/store";
import { todoReducer } from "./core/store/todos/todos.reducer";
// import { reducers, metaReducers } from './reducers';

@NgModule({
    declarations: [AppComponent, TodoInputComponent, TodoListComponent],
    imports: [BrowserModule, StoreModule.forRoot({ todosss: todoReducer })],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {}
