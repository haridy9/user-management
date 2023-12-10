import {Component} from '@angular/core';
import {FormsModule, NgForm} from "@angular/forms";
import {LoginService} from "../service/login/login.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    FormsModule
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {


  constructor(private loginService: LoginService, private router: Router) {
  }

  login(form: NgForm): void {
    const username: string = form.value.username;
    const password: string = form.value.password;

    if (!this.loginService.makeLogin(username, password)) {
      form.reset();
      return;
    }
    this.router.navigate(['home']);
    form.reset();

  }


}
