import { HttpClient } from "@angular/common/http";
import { inject, Injectable } from "@angular/core";
import { environment } from "@environments/environment";
import { Role } from "../models/role.model";

@Injectable()
export class RolesService {
    private _http = inject(HttpClient);
    private apiUrl = environment.apiUrl;

    getRoles() {
        return this._http.get<Role[]>(`${this.apiUrl}/roles`);
    }
}