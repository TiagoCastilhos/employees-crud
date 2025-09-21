import { Component, ElementRef, inject, OnDestroy, OnInit, ViewChild } from "@angular/core";
import { DashboardsService } from "../../services/dashboards.service";
import { ActivatedRoute } from "@angular/router";
import { EmployeeHistory } from "../../models/employee-history.model";
import Chart from 'chart.js/auto';

@Component({
    selector: 'app-employee-history',
    templateUrl: './employee-history.component.html',
    styleUrl: './employee-history.component.scss',
    standalone: false,
})
export class EmployeeHistoryComponent implements OnInit, OnDestroy {
    private _dashboardsService = inject(DashboardsService);
    private _activatedRoute = inject(ActivatedRoute);

    @ViewChild('history', { static: true }) chartRef!: ElementRef<HTMLCanvasElement>;
    public chart: any;

    ngOnInit() {
        this._activatedRoute.params.subscribe(params => {
            const employeeId = params['id'];
            this._dashboardsService.getEmployeeHistory(employeeId)
                .subscribe(employeeHistory => {
                    this.createChart(employeeHistory);
                });
        });
    }

    ngOnDestroy() {
        if (this.chart) {
            this.chart.destroy();
        }
    }

    private createChart(employeeHistory: EmployeeHistory) {
        const ctx = this.chartRef.nativeElement.getContext('2d');
        if (!ctx) {
            console.error('Could not get 2D context for chart');
            return;
        }
        this.chart = new Chart(ctx, {
            type: 'line',
            data: this.generateData(employeeHistory)
        });
    }

    private generateData(employeeHistory: EmployeeHistory) {
        const labels = this.generateLabels(employeeHistory);

        return {
            labels: labels.map(l => l.date),
            datasets: [{
                label: `Evolution - ${employeeHistory.employee.name}`,
                data: labels.map(l => l.salary),
                fill: false,
                borderColor: 'rgb(75, 192, 192)',
                tension: 0.1
            }]
        };
    }

    private generateLabels(employeeHistory: EmployeeHistory) {
        return employeeHistory.history.map(e => {
            const date = new Date(e.startDate);
            return {
                date: `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`,
                salary: e.salary
            };
        });
    }
}