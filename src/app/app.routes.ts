import {Routes} from '@angular/router';
import {AppComponent} from "./app.component";
import {LoginComponent} from "./login/login.component";
import {IndexComponent} from "./index/index.component";
import {EditUserComponent} from "./edit-user/edit-user.component";
import {CreateUserComponent} from "./create-user/create-user.component";

export const routes: Routes = [
  {path: 'home', component: IndexComponent},
  {path: 'login', component: LoginComponent},
  {path: 'edit', component: EditUserComponent},
  {path: 'create', component: CreateUserComponent}
];
