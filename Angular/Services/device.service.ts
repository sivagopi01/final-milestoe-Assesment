import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Device } from 'src/models.ts/device.model';


@Injectable({
  providedIn: 'root'
})
export class DeviceService {
  private apiUrl = 'http://localhost:3000/api/devices'; // Adjust the API URL as needed

  constructor(private http: HttpClient) {}

  // Get all devices
  getDevices(): Observable<Device[]> {
    return this.http.get<Device[]>(this.apiUrl);
  }

  // Get a device by ID
  getDevice(id: number): Observable<Device> {
    return this.http.get<Device>(`${this.apiUrl}/${id}`);
  }

  // Add a new device
  addDevice(device: Device): Observable<Device> {
    return this.http.post<Device>(this.apiUrl, device, this.httpOptions);
  }

  // Update an existing device
  updateDevice(id: number, device: Device): Observable<Device> {
    return this.http.put<Device>(`${this.apiUrl}/${id}`, device, this.httpOptions);
  }

  // Delete a device
  deleteDevice(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }

  // Get device count
  getDeviceCount(): Observable<number> {
    return this.http.get<number>(`${this.apiUrl}/count`);
  }

  // Get system status
  getSystemStatus(): Observable<string> {
    return this.http.get<string>(`${this.apiUrl}/status`);
  }

  // HTTP options for headers
  private httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
}