import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { dashboardsRoutes } from './dashboards.routes';
import { EmployeeHistoryComponent } from './components/employee-history/employee-history.component';
import { DashboardsService } from './services/dashboards.service';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { RolesSalariesComponent } from './components/roles-salaries/roles-salaries.component';
import { ServiceTimeComponent } from './components/service-time/service-time.component';

@NgModule({
  declarations: [
    EmployeeHistoryComponent,
    RolesSalariesComponent,
    ServiceTimeComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(dashboardsRoutes),
    MatCardModule,
    MatListModule
  ],
  providers: [
    DashboardsService
  ]
})
export class DashboardsModule { }