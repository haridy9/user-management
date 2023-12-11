import {Component} from '@angular/core';
import {Location} from '@angular/common';
import {Router} from "@angular/router";
import {User} from "../models/user.model";
import {UserService} from "../service/user/user.service";
import {FormsModule, NgForm} from "@angular/forms";
import {last} from "rxjs";
import {UserValidationService} from "../service/validation/user-validation.service";
import {UserDb} from "../../user-db";
import {Department} from "../models/Department";
import {DepartmentService} from "../service/department/department.service";

@Component({
  selector: 'app-edit-user',
  standalone: true,
  imports: [
    FormsModule
  ],
  templateUrl: './edit-user.component.html',
  styleUrl: './edit-user.component.css'
})
export class EditUserComponent {
  user: User | undefined;
  departments: Department[] = [];
  selectedDepartment: any = -1;

  constructor(private router: Router, private userService: UserService, private departmentService: DepartmentService) {
    let state = this.router.getCurrentNavigation()?.extras.state as { id: number };
    if (!state.id) {
      this.router.navigate(['home']);
    }
    this.user = userService.findById(state.id);
    this.departments = departmentService.departments;
    this.selectedDepartment = this.user?.department.id;
  }

  private noChange(firstName: string, lastName: string, email: string, phoneNumber: string, selectedDept: number): boolean {
    return (firstName == this.user?.firstName && lastName == this.user.lastName && email == this.user.email && phoneNumber == this.user.phoneNumber && selectedDept == this.user.department.id);
  }

  updateUser(form: NgForm) {
    let newUser = form.value;

    if (this.noChange(newUser.firstName, newUser.lastName, newUser.email, newUser.phoneNumber, this.selectedDepartment)) {
      this.router.navigate(['home']);
      return false;
    }

    if (!UserValidationService.validUserEditData(newUser.firstName, newUser.lastName, newUser.email, newUser.phoneNumber)) {
      return false;
    }
    newUser.id = this.user?.id;
    newUser.username = this.user?.username;
    newUser.password = this.user?.password;
    newUser.department = this.departmentService.findById(this.selectedDepartment);
    console.log(newUser);
    this.router.navigate(['home'])
    return this.userService.updateUser(newUser);
  }


  cancel() {
    this.router.navigate(['home']);
  }

  updateDept(department: any) {
    this.selectedDepartment = department;
  }
}
