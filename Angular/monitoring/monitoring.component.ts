import { Component, OnInit } from '@angular/core';
import { MonitoringMetric } from 'src/models.ts/monitoringmodel';
import { MonitoringService } from '../monitoring.service';
//import { MonitoringService } from './monitoring.service';
//import { MonitoringMetric } from './monitoring.model';

@Component({
  selector: 'app-monitoring',
  templateUrl: './monitoring.component.html',
  styleUrls: ['./monitoring.component.css']
})
export class MonitoringComponent implements OnInit {
  metrics: MonitoringMetric[] = [];
  selectedMetric: MonitoringMetric = {
    id: 0,
    deviceId: 0,
    userId: 0,
    status: '',
    timestamp: new Date(),
    message: ''
  };

  constructor(private monitoringService: MonitoringService) {}

  ngOnInit(): void {
    this.loadMetrics();
  }

  // Load all metrics
  loadMetrics(): void {
    this.monitoringService.getMetrics().subscribe(data => {
      this.metrics = data;
    });
  }

  // Select a metric for editing
  selectMetric(metric: MonitoringMetric): void {
    this.selectedMetric = { ...metric };  // Copy the selected metric for editing
  }

  // Update the selected metric
  updateMetric(): void {
    this.monitoringService.updateMetric(this.selectedMetric.id, this.selectedMetric)
      .subscribe(() => {
        this.loadMetrics();  // Refresh the metrics list
      });
  }

  // Clear the selected metric (reset form)
  clearSelection(): void {
    this.selectedMetric = {
      id: 0,
      deviceId: 0,
      userId: 0,
      status: '',
      timestamp: new Date(),
      message: ''
    };
  }
}