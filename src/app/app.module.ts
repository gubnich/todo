import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { StoreModule } from "@ngrx/store";
import { StoreDevtoolsModule } from "@ngrx/store-devtools";
import { EffectsModule } from "@ngrx/effects";
import { environment } from "../environments/environment";

import { AppComponent } from "./app.component";
import {
    AppRoutingModule,
    TodoEffects,
    todoReducer,
    TodoService,
    RealtimeService
} from "./core/index";
import { TodoInputComponent } from "./todo-input/index";
import { TodoListComponent } from "./todo-list/index";
import { RealtimeDataComponent } from "./realtime-data/index";
import { TodoComponent } from "./todo/index";

@NgModule({
    declarations: [
        AppComponent,
        TodoInputComponent,
        TodoListComponent,
        RealtimeDataComponent,
        TodoComponent
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        StoreModule.forRoot({ todoApp: todoReducer }),
        EffectsModule.forRoot([TodoEffects]),
        StoreDevtoolsModule.instrument({
            maxAge: 25,
            logOnly: environment.production
        }),
        AppRoutingModule
    ],
    providers: [TodoService, RealtimeService],
    bootstrap: [AppComponent]
})
export class AppModule {}
