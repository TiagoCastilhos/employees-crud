import { Routes } from "@angular/router";
import { List } from "./components/list/list";
import { Edit } from "./components/edit/edit";

export const employeesRoutes: Routes = [
    { path: '', component: List },
    { path: ':id', component: Edit },
]