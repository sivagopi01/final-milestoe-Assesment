import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Device } from 'src/models.ts/device.model';
import { DeviceService } from '../device.service';
//import { DeviceService } from '../services/device.service';
//import { Device } from '../models/device.model';

@Component({
  selector: 'app-device-management',
  templateUrl: './device-management.component.html',
  styleUrls: ['./device-management.component.css']
})
export class DeviceManagementComponent implements OnInit {
  devices: Device[] = [];
  deviceForm: FormGroup;
  selectedDevice: Device | null = null;
  isEditing = false;

  constructor(private deviceService: DeviceService, private fb: FormBuilder) {
    this.deviceForm = this.fb.group({
      name: ['', Validators.required],
      type: ['', Validators.required],
      status: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    this.loadDevices();
  }

  loadDevices(): void {
    this.deviceService.getDevices().subscribe(devices => this.devices = devices);
  }

  selectDevice(device: Device): void {
    this.selectedDevice = device;
    this.isEditing = true;
    this.deviceForm.patchValue(device);
  }

  addDevice(): void {
    if (this.deviceForm.valid) {
      this.deviceService.addDevice(this.deviceForm.value).subscribe(() => {
        this.loadDevices();
        this.resetForm();
      });
    }
  }

  updateDevice(): void {
    if (this.deviceForm.valid && this.selectedDevice) {
      this.deviceService.updateDevice(this.selectedDevice.deviceID, this.deviceForm.value)
        .subscribe(() => {
          this.loadDevices();
          this.resetForm();
        });
    }
  }

  deleteDevice(id: number): void {
    this.deviceService.deleteDevice(id).subscribe(() => {
      this.loadDevices();
    });
  }

  resetForm(): void {
    this.deviceForm.reset();
    this.selectedDevice = null;
    this.isEditing = false;
  }
}