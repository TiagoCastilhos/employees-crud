import { Routes } from "@angular/router";
import { EmployeeHistoryComponent } from "./components/employee-history/employee-history.component";
import { RoleSalariesComponent } from "./components/role-salaries/role-salaries.component";
import { ServiceTimeComponent } from "./components/service-time/service-time.component";

export const dashboardsRoutes: Routes = [
    { path: 'employees/:id', component: EmployeeHistoryComponent },
    { path: 'role-salaries', component: RoleSalariesComponent },
    { path: 'service-time', component: ServiceTimeComponent },
    { path: '', redirectTo: 'role-salaries', pathMatch: 'full' },
]