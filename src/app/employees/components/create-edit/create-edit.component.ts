import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EmployeesService } from '../../services/employees.service';
import { Employee } from '../../models/employee.model';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-create-edit',
  templateUrl: './create-edit.component.html',
  styleUrl: './create-edit.component.scss',
  standalone: false,
})
export class CreateEditComponent {
  private _route = inject(ActivatedRoute);
  private _employeesService = inject(EmployeesService);
  formControl = new FormControl('');

  employee: Employee | null = null;

  ngOnInit() {
    this._route.paramMap.subscribe(p => {
      const id = p.get('id');

      if (!id) {
        this.employee = null;
        return;
      }

      this._employeesService.getEmployee(id)
        .subscribe(employee => this.employee = employee);
    });
  }

  saveEmployee() {
    if (this.employee) {
      this._employeesService.updateEmployee(this.employee.id, this.employee);
      return;
    }

    this._employeesService.createEmployee(this.employee!);
  }
}
