import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { StoreModule } from "@ngrx/store";
import { StoreDevtoolsModule } from "@ngrx/store-devtools";
import { EffectsModule } from "@ngrx/effects";
import { environment } from "../environments/environment";

import { AppComponent } from "./app.component";
import { TodoInputComponent } from "./todo-input/todo-input.component";
import { TodoListComponent } from "./todo-list/todo-list.component";
import { todoReducer, TodoService } from "./core";
import { TodoEffects } from "./core/effects/todo.effects";

@NgModule({
    declarations: [AppComponent, TodoInputComponent, TodoListComponent],
    imports: [
        BrowserModule,
        StoreModule.forRoot({ todoApp: todoReducer }),
        EffectsModule.forRoot([TodoEffects]),
        StoreDevtoolsModule.instrument({
            maxAge: 25,
            logOnly: environment.production
        })
    ],
    providers: [TodoService],
    bootstrap: [AppComponent]
})
export class AppModule {}
