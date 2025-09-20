import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EmployeesService } from '../../services/employees.service';
import { Employee } from '../../models/employee.model';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { RolesService } from '../../services/roles.service';

@Component({
  selector: 'app-create-edit',
  templateUrl: './create-edit.component.html',
  styleUrl: './create-edit.component.scss',
  standalone: false,
})
export class CreateEditComponent {
  private _route = inject(ActivatedRoute);
  private _employeesService = inject(EmployeesService);
  private _rolesService = inject(RolesService);
  private fb = inject(FormBuilder);

  employee: Employee | null = null;
  roles$ = this._rolesService.getRoles();

  protected employeeForm: FormGroup<EmployeeForm> = this.fb.group<EmployeeForm>(
    {
      name: this.fb.nonNullable.control<string>(this.employee?.name ?? '', [
        Validators.required,
      ]),
      email: this.fb.nonNullable.control<string>(this.employee?.email ?? '', [
        Validators.required,
        Validators.email
      ]),
      roleId: this.fb.nonNullable.control<string>(this.employee?.roleId ?? '', [
        Validators.required
      ])
    }
  );

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

export interface EmployeeForm {
    name: FormControl<string>;
    email: FormControl<string>;
    roleId: FormControl<string>;
}