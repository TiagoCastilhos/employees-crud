import { Component, ElementRef, inject, OnDestroy, OnInit, ViewChild } from "@angular/core";
import { DashboardsService } from "../../services/dashboards.service";
import { EmployeeHistory } from "../../models/employee-history.model";
import { Chart } from "chart.js/auto";

@Component({
    selector: 'app-roles-salaries',
    templateUrl: './roles-salaries.component.html',
    styleUrl: './roles-salaries.component.scss',
    standalone: false,
})
export class RolesSalariesComponent implements OnInit, OnDestroy {
    private _dashboardsService = inject(DashboardsService);

    @ViewChild('salaries', { static: true }) chartRef!: ElementRef<HTMLCanvasElement>;
    public chart: any;

    ngOnInit(): void {
        this._dashboardsService.getEmployeesHistories()
            .subscribe(employeesHistories => this.createChart(employeesHistories));
    }

    ngOnDestroy() {
        if (this.chart) {
            this.chart.destroy();
        }
    }

    private createChart(employeesHistories: EmployeeHistory[]) {
        const ctx = this.chartRef.nativeElement.getContext('2d');

        if (!ctx) {
            console.error('Could not get 2D context for chart');
            return;
        }

        this.chart = new Chart(ctx, {
            type: 'bar',
            data: this.generateData(employeesHistories),
            options: {
                scales: {
                    y: {
                        beginAtZero: true
                    }
                }
            }
        });
    }

    private generateData(employeesHistories: EmployeeHistory[]) {
        const data = new Map<string, number[]>();

        for (const employeeHistory of employeesHistories) {
            for (const history of employeeHistory.history) {
                if (!data.has(history.role)) {
                    data.set(history.role, []);
                }

                data.get(history.role)!.push(history.salary);
            }
        }

        const averages = Array.from(data.entries()).map(([role, salaries]) => {
            const total = salaries.reduce((acc, salary) => acc + salary, 0);
            return { role, average: total / salaries.length };
        });

        return {
            labels: averages.map(a => a.role),
            datasets: [{
                label: 'Average Salary by Role',
                data: averages.map(a => a.average),
                borderWidth: 1
            }]
        };
    }
}