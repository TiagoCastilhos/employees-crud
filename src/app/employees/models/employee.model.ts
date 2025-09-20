import { Role } from "./role.model";

export interface Employee {
    id: string;
    name: string;
    email: string;
    roleId: string;
    active: boolean;
    role: Role;
}