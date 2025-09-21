import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { dashboardsRoutes } from './dashboards.routes';
import { EmployeeHistoryComponent } from './components/employee-history/employee-history.component';
import { DashboardsService } from './services/dashboards.service';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';

@NgModule({
  declarations: [
    EmployeeHistoryComponent
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