import { Employee } from "./employee.model";
import { History } from "./history.model";

export interface EmployeeHistory {
    employee: Employee,
    history: History[]
}