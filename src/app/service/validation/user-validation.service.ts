import {Injectable} from '@angular/core';
import {User} from "../../models/user.model";
import {retry} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class UserValidationService {
  private static namingReg: RegExp = /^[a-zA-Z]{5,}$/;
  private static emailReg: RegExp = /^[a-zA-Z\d._-]+@[a-zA-Z\d.-]+\.[a-zA-Z]{2,}$/;
  private static phoneReg: RegExp = /^01[0125]\d{8}$/;
  private static usernameReg: RegExp = /^[a-zA-Z]{4,}$/;
  private static passwordReg: RegExp = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%.*?&])[A-Za-z\d@$!%*.?&]{8,}$/;

  static validUserEditData(firstName: string, lastName: string, email: string, phoneNumber: string) {
    return (this.namingReg.test(firstName) && this.namingReg.test(lastName) && this.emailReg.test(email) && this.phoneReg.test(phoneNumber));
  }

  static validCreateDate(user: User) {
    return (this.validUserEditData(user.firstName, user.lastName, user.email, user.phoneNumber) && this.usernameReg.test(user.username) && this.passwordReg.test(user.password));

  }
}
