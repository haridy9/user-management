import {Injectable} from '@angular/core';
import {users} from "../../../user-db";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() {
  }

  findUser(username: string, password: string) {
    return users.find(user => user.username == username && user.password == password);
  }


}
