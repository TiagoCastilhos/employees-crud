import { Routes } from '@angular/router';
import { NotFoundComponent } from './core/not-found/not-found.component';
// import { NotFoundComponent } from './pages/not-found/not-found.component';
// import { FavoritosComponent } from './pages/favoritos/favoritos.component';
// import { AutenticacaoGuard } from './guards/autenticacao.guard';

export const routes: Routes = [
    { path: 'employees', loadChildren: () => import('./employees/employees.module').then(m => m.EmployeesModule) },
    { path: '', redirectTo: 'employees', pathMatch: 'full' },
    { path: '**', component: NotFoundComponent },
];