import { Component, OnInit } from '@angular/core';
import { DeviceService } from '../device.service';
//import { DeviceService } from '../services/device.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {
  totalDevices: number = 0;
  systemStatus: string = 'Unknown';

  constructor(private deviceService: DeviceService) {}

  ngOnInit(): void {
    this.deviceService.getDeviceCount().subscribe(count => this.totalDevices = count);
    this.deviceService.getSystemStatus().subscribe(status => this.systemStatus = status);
  }

  logout() {
    // Implement logout logic here
    console.log('User logged out');
  }
}