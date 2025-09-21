import { Component, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EmployeesService } from '../../services/employees.service';
import { Employee } from '../../models/employee.model';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { RolesService } from '../../services/roles.service';

//ToDo: It's not ideal to reuse the same component for create and edit, it violates SRP. 
//Ideally I would create a reusable form for the edit and create operations, then different 
//components for each and use the reusable form in both components.
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
  private _fb = inject(FormBuilder);
  private _router = inject(Router);

  employee: Employee | null = null;
  roles$ = this._rolesService.getRoles();

  protected employeeForm: FormGroup<EmployeeForm> = this._fb.group<EmployeeForm>(
    {
      name: this._fb.nonNullable.control<string>('', [
        Validators.required,
      ]),
      email: this._fb.nonNullable.control<string>('', [
        Validators.required,
        Validators.email
      ]),
      roleId: this._fb.nonNullable.control<string>('', [
        Validators.required
      ]),
      salary: this._fb.nonNullable.control<number>(0, [
        Validators.required,
        Validators.min(1)
      ])
    }
  );

  ngOnInit() {
    this._route.paramMap.subscribe(p => {
      const id = p.get('id');

      console.log('Employee ID from route:', id);

      if (!id) {
        this.employee = null;
        return;
      }

      this._employeesService.getEmployee(id)
        .subscribe(employee => {
           this.employee = employee;
           this.employeeForm.patchValue({
             name: employee.name,
             email: employee.email,
             roleId: employee.roleId,
             salary: employee.salary
           });
        });
    });
  }

  saveEmployee() {
    const newEmployee = this.employeeForm.value as Employee;

    if (this.employee) {
      newEmployee.active = this.employee.active; 
      this._employeesService.updateEmployee(this.employee.id, newEmployee)
        .subscribe(() => this._router.navigate(['/employees']));

      return;
    }

    newEmployee.active = true;
    this._employeesService.createEmployee(newEmployee)
      .subscribe(() => this._router.navigate(['/employees']));
  }
}

export interface EmployeeForm {
    name: FormControl<string>;
    email: FormControl<string>;
    roleId: FormControl<string>;
    salary: FormControl<number>;
}