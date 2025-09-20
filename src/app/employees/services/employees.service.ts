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
        return this._http.put<Employee>(`${this.apiUrl}/employees/${id}`, employee);
    }

    deleteEmployee(id: string) {
        return this._http.delete<void>(`${this.apiUrl}/employees/${id}`);
    }
}