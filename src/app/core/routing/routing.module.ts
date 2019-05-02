import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { RealtimeDataComponent } from "../../realtime-data/index";
import { TodoComponent } from "../../todo/index";

const appRoutes: Routes = [
    { path: "", redirectTo: "/todo", pathMatch: "full" },
    { path: "todo", component: TodoComponent },
    { path: "realtime", component: RealtimeDataComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}
