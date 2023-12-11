import {Component, OnInit} from '@angular/core';
import {UserService} from "../service/user/user.service";
import {User} from "../models/user.model";
import {LoginService} from "../service/login/login.service";
import {Router} from "@angular/router";
import {DepartmentService} from "../service/department/department.service";

@Component({
  selector: 'app-index',
  standalone: true,
  imports: [],
  templateUrl: './index.component.html',
  styleUrl: './index.component.css'
})
export class IndexComponent implements OnInit {
  users: User[] = [];

  constructor(private userService: UserService, protected loginService: LoginService, private router: Router, private deptService: DepartmentService) {
    if (this.users.length == 0) {
      this.users = this.userService.findAll();
    }
  }

  ngOnInit() {
    this.deptService.loadFromFile();
  }

  clearUser(id: number) {
    const isConfirmed = window.confirm('Are you sure you want to clear the user?');
    if (isConfirmed) {
      this.userService.remove(id);
      this.users = this.userService.findAll();
    }
  }

  editUser(id: number) {
    this.router.navigate(['edit'], {
      state: {id: id}
    });
  }

  navigateToAddUser() {
    this.router.navigate(['create']);
  }
}
