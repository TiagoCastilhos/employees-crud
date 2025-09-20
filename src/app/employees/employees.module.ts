import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { List } from './components/list/list';
import { RouterModule } from '@angular/router';
import { employeesRoutes } from './employees.routes';
import { Edit } from './components/edit/edit';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [
    List,
    Edit
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(employeesRoutes),
    MatTableModule,
    MatButtonModule
  ]
})
export class EmployeesModule { }
