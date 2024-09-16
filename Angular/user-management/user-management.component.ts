import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { User } from 'src/models.ts/user.model';
import { UserService } from '../user.service';
//import { UserService } from '../services/user.service';
//import { User } from '../models/user.model';

@Component({
  selector: 'app-user-management',
  templateUrl: './user-management.component.html',
  styleUrls: ['./user-management.component.css']
})
export class UserManagementComponent implements OnInit {
  users: User[] = [];
  userForm: FormGroup;
  selectedUser: User | null = null;
  isEditing = false;

  constructor(private userService: UserService, private fb: FormBuilder) {
    this.userForm = this.fb.group({
      username: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      role: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    this.loadUsers();
  }

  loadUsers(): void {
    this.userService.getUsers().subscribe(users => this.users = users);
  }

  selectUser(user: User): void {
    this.selectedUser = user;
    this.isEditing = true;
    this.userForm.patchValue(user);
  }

  addUser(): void {
    if (this.userForm.valid) {
      this.userService.addUser(this.userForm.value).subscribe(() => {
        this.loadUsers();
        this.resetForm();
      });
    }
  }

  updateUser(): void {
    if (this.userForm.valid && this.selectedUser) {
      this.userService.updateUser(this.selectedUser.userID, this.userForm.value)
        .subscribe(() => {
          this.loadUsers();
          this.resetForm();
        });
    }
  }

  deleteUser(id: number): void {
    this.userService.deleteUser(id).subscribe(() => {
      this.loadUsers();
    });
  }

  resetForm(): void {
    this.userForm.reset();
    this.selectedUser = null;
    this.isEditing = false;
  }
}