import { HttpClient } from "@angular/common/http";
import { inject, Injectable } from "@angular/core";
import { environment } from "@environments/environment";
import { EmployeeHistory } from "../models/employee-history.model";

@Injectable()
export class DashboardsService {
    private _http = inject(HttpClient);
    private apiUrl = environment.apiUrl;

    getEmployeeHistory(id: string) {
        return this._http.get<EmployeeHistory>(`${this.apiUrl}/employeesHistory/${id}?_embed=employee`);
    }

    getEmployeesHistories() {
        return this._http.get<EmployeeHistory[]>(`${this.apiUrl}/employeesHistory?_embed=employee`);
    }
}