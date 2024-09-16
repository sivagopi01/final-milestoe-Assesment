import { Component, OnInit } from '@angular/core';
import { Device } from 'src/models.ts/device.model';
import { DeviceService } from '../device.service';
//import { DeviceService } from '../services/device.service';
//import { Device } from '../models/device.model';

@Component({
  selector: 'app-device-control',
  templateUrl: './device-control.component.html',
  styleUrls: ['./device-control.component.css']
})
export class DeviceControlComponent implements OnInit {
  devices: Device[] = [];
  selectedDevice: Device | null = null;

  constructor(private deviceService: DeviceService) {}

  ngOnInit(): void {
    this.deviceService.getDevices().subscribe(devices => this.devices = devices);
  }

  toggleDevice(device: Device): void {
    const updatedStatus = device.status === 'On' ? 'Off' : 'On';
    this.deviceService.updateDevice(device.deviceID, { ...device, status: updatedStatus })
      .subscribe(() => this.ngOnInit());
  }
}