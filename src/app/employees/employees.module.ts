import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './components/list/list.component';
import { RouterModule } from '@angular/router';
import { employeesRoutes } from './employees.routes';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { CreateEditComponent } from './components/create-edit/create-edit.component';
import { FormsModule } from '@angular/forms';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [
    ListComponent,
    CreateEditComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(employeesRoutes),
    MatTableModule,
    MatButtonModule,
    MatDialogModule,
    FormsModule,
    MatMenuModule,
    MatIconModule
  ]
})
export class EmployeesModule { }
