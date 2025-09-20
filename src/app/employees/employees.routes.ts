import { Routes } from "@angular/router";
import { ListComponent } from "./components/list/list.component";
import { CreateEditComponent } from "./components/create-edit/create-edit.component";

export const employeesRoutes: Routes = [
    { path: '', component: ListComponent },
    { path: 'create', component: CreateEditComponent },
    { path: ':id', component: CreateEditComponent }
]