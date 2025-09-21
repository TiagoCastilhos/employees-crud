import { Routes } from '@angular/router';
import { NotFoundComponent } from './core/not-found/not-found.component';

export const routes: Routes = [
    { path: 'employees', loadChildren: () => import('./employees/employees.module').then(m => m.EmployeesModule) },
    { path: 'dashboards', loadChildren: () => import('./dashboards/dashboards.module').then(m => m.DashboardsModule) },
    { path: '', redirectTo: 'employees', pathMatch: 'full' },
    { path: '**', component: NotFoundComponent },
];