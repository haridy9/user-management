import {Component} from '@angular/core';
import {CommonModule} from '@angular/common';
import {Router, RouterOutlet} from '@angular/router';
import {LoginComponent} from "./login/login.component";
import {LoginService} from "./service/login/login.service";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, LoginComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'user-management';

  constructor(private router: Router) {
    if (sessionStorage.getItem(LoginService.LOGGED_USERNAME_KEY)) {
      this.router.navigate(['home']);
    } else {
      this.router.navigate(['login']);
    }

  }
}
