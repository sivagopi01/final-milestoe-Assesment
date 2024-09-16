import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SettingsComponent } from './settings/settings.component';
import { MonitoringComponent } from './monitoring/monitoring.component';
import { UserManagementComponent } from './user-management/user-management.component';
import { DeviceControlComponent } from './device-control/device-control.component';
import { DeviceManagementComponent } from './device-management/device-management.component';
import { HomepageComponent } from './homepage/homepage.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' }, // Redirect to homepage on load
  { path: 'home', component: HomepageComponent },
  { path: 'devices', component: DeviceManagementComponent },
  { path: 'device-control', component: DeviceControlComponent },
  { path: 'users', component: UserManagementComponent },
  { path: 'monitoring', component: MonitoringComponent },
  { path: 'settings', component: SettingsComponent },
  { path: '**', redirectTo: '/home' } // Redirect any unknown paths to homepage
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}