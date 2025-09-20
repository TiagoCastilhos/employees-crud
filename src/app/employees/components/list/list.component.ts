import { Component, inject, OnInit } from '@angular/core';
import { EmployeesService } from '../../services/employees.service';
import { MatTableDataSource } from '@angular/material/table';
import { Employee } from '../../models/employee.model';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.scss',
  standalone: false,
})
export class ListComponent implements OnInit {
  private _employeesService = inject(EmployeesService);

  dataSource = new MatTableDataSource<Employee>([]);
  displayedColumns: string[] = ['id', 'name', 'role', 'active', 'actions'];

  ngOnInit() {
    this._employeesService.getEmployees().subscribe((employees) => {
      this.dataSource.data = employees;
    });
  }

  editEmployee(id: string) {

  }

  deleteEmployee(id: string) {
    this._employeesService.deleteEmployee(id).subscribe(() => {
      this.dataSource.data = this.dataSource.data.filter(e => e.id !== id);
    });
  }
}
