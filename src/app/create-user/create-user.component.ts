import {Component, numberAttribute} from '@angular/core';
import {FormsModule, NgForm, ReactiveFormsModule} from "@angular/forms";
import {UserValidationService} from "../service/validation/user-validation.service";
import {UserService} from "../service/user/user.service";
import {Router} from "@angular/router";
import {Department} from "../models/Department";
import {DepartmentService} from "../service/department/department.service";
import {toInteger} from "@ng-bootstrap/ng-bootstrap/util/util";

@Component({
  selector: 'app-create-user',
  standalone: true,
  imports: [
    FormsModule,
    ReactiveFormsModule
  ],
  templateUrl: './create-user.component.html',
  styleUrl: './create-user.component.css'
})
export class CreateUserComponent {
  departments: Department[] = [];
  selectedDepartment: number = 1;

  constructor(private userService: UserService, private router: Router, private departmentService: DepartmentService) {
    this.departments = this.departmentService.loadFromFile();
  }

  createUser(form: NgForm): boolean {
    let newUser = form.value;
    if (!UserValidationService.validCreateDate(newUser) || this.userService.isExist(newUser.username)) {
      return false;
    }
    newUser.department = this.departmentService.findById(this.selectedDepartment);

    this.userService.addUser(newUser);
    this.router.navigate(['home']);
    return true;
  }

  navigateToHome() {
    this.router.navigate(['home']);

  }

  updateDepartment(value: any) {
    this.selectedDepartment = value;
  }
}
