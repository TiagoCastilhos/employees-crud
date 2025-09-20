import { Component, inject, OnInit } from '@angular/core';
import { EmployeesService } from '../../services/employees.service';
import { MatTableDataSource } from '@angular/material/table';
import { Employee } from '../../models/employee';
import { SelectionModel } from '@angular/cdk/collections';
import { map, startWith } from 'rxjs';

@Component({
  selector: 'app-list',
  templateUrl: './list.html',
  styleUrl: './list.scss',
  standalone: false,
})
export class List implements OnInit {
  private _employeesService = inject(EmployeesService);

  dataSource = new MatTableDataSource<Employee>([]);
  displayedColumns: string[] = ['id', 'name', 'active'];

  ngOnInit() {
    this._employeesService.getEmployees().subscribe((employees) => {
      this.dataSource.data = employees;
    });
  }

  addEmployee() {
    
  }
}
