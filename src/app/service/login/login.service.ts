import {Injectable} from '@angular/core';
import {UserService} from "../user/user.service";

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private _LoggedUsername: string = '';
  static LOGGED_USERNAME_KEY: string = 'loggedUsername';

  constructor(private userService: UserService) {
    if (sessionStorage.getItem(LoginService.LOGGED_USERNAME_KEY)) {
      this._LoggedUsername = sessionStorage.getItem(LoginService.LOGGED_USERNAME_KEY)!;
    }

  }


  get LoggedUsername(): string {
    return this._LoggedUsername;
  }

  makeLogin(username: string, password: string): boolean {

    const user = this.userService.findUser(username, password);
    if (!user) {
      return false;
    }
    this._LoggedUsername = user.username;
    sessionStorage.setItem('loggedUsername', this._LoggedUsername);
    return true;
  }


}
