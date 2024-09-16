import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { MonitoringMetric } from 'src/models.ts/monitoringmodel';
//import { MonitoringMetric } from './monitoring.model';

@Injectable({
  providedIn: 'root'
})
export class MonitoringService {
  private baseUrl = 'http://localhost:3000/metrics';  // Update with your API URL
  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  constructor(private http: HttpClient) {}

  // Get all monitoring metrics
  getMetrics(): Observable<MonitoringMetric[]> {
    return this.http.get<MonitoringMetric[]>(this.baseUrl)
      .pipe(catchError(this.handleError));
  }

  // Get a single metric by ID
  getMetric(id: number): Observable<MonitoringMetric> {
    return this.http.get<MonitoringMetric>(`${this.baseUrl}/${id}`)
      .pipe(catchError(this.handleError));
  }

  // Create a new monitoring metric
  createMetric(metric: MonitoringMetric): Observable<MonitoringMetric> {
    return this.http.post<MonitoringMetric>(this.baseUrl, metric, this.httpOptions)
      .pipe(catchError(this.handleError));
  }

  // Update an existing monitoring metric
  updateMetric(id: number, metric: MonitoringMetric): Observable<MonitoringMetric> {
    return this.http.put<MonitoringMetric>(`${this.baseUrl}/${id}`, metric, this.httpOptions)
      .pipe(catchError(this.handleError));
  }

  // Delete a monitoring metric
  deleteMetric(id: number): Observable<MonitoringMetric> {
    return this.http.delete<MonitoringMetric>(`${this.baseUrl}/${id}`, this.httpOptions)
      .pipe(catchError(this.handleError));
  }

  // Error handling
  private handleError(error: any) {
    console.error('Error occurred:', error);
    return throwError(error);
  }
}