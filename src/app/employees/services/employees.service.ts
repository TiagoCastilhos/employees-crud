import { HttpClient } from "@angular/common/http";
import { inject, Injectable } from "@angular/core";
import { environment } from "@environments/environment";
import { Employee } from "../models/employee.model";

@Injectable()
export class EmployeesService {
    private _http = inject(HttpClient);
    private apiUrl = environment.apiUrl;

    getEmployees() {
        return this._http.get<Employee[]>(`${this.apiUrl}/employees?_embed=role`);
    }

    getEmployee(id: string) {
        return this._http.get<Employee>(`${this.apiUrl}/employees/${id}?_embed=role`);
    }

    createEmployee(employee: Employee) {
        return this._http.post<Employee>(`${this.apiUrl}/employees`, employee);
    }

    updateEmployee(id: string, employee: Employee) {
        //ToDo: It should add an entry to the employee history as well when updating an employee.
        //Since json server doesn't support transactions, this is not implemented now.
        return this._http.put<Employee>(`${this.apiUrl}/employees/${id}`, employee);
    }

    deleteEmployee(id: string) {
        //ToDo: Delete should ideally be a soft delete, just updating the active property to false.
        //I couldn't find any option to do a soft delete with json-server, so this is actually deleting the json entry.
        return this._http.delete<void>(`${this.apiUrl}/employees/${id}`);
    }
}