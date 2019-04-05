import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { StoreModule } from "@ngrx/store";
import { StoreDevtoolsModule } from "@ngrx/store-devtools";
import { environment } from "../environments/environment";

import { AppComponent } from "./app.component";
import { TodoInputComponent } from "./todo-input/todo-input.component";
import { TodoListComponent } from "./todo-list/todo-list.component";
import { todoReducer, TodoService } from "./core";

@NgModule({
    declarations: [AppComponent, TodoInputComponent, TodoListComponent],
    imports: [
        BrowserModule,
        StoreModule.forRoot({ todoApp: todoReducer }),
        StoreDevtoolsModule.instrument({
            maxAge: 25, // Retains last 25 states
            logOnly: environment.production // Restrict extension to log-only mode
        })
    ],
    providers: [TodoService],
    bootstrap: [AppComponent]
})
export class AppModule {}
