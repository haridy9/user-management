import {Injectable} from '@angular/core';
import {UserDb} from "../../../user-db";
import {User} from "../../models/user.model";

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private static id: number = 3;

  constructor() {
  }

  findUser(username: string, password: string) {
    return UserDb.users.find(user => user.username == username && user.password == password);
  }

  findByUsername(username: string) {
    return UserDb.users.find(user => user.username == username);
  }

  findById(id: number) {
    return UserDb.users.find(user => user.id == id);
  }

  findAll() {
    return UserDb.users;
  }

  remove(id: number) {
    UserDb.users = UserDb.users.filter(user => user.id !== id);
  }

  updateUser(newUser: any): boolean {
    const index = UserDb.users.findIndex(user => user.id === newUser.id);
    if (index != -1) {
      UserDb.users[index] = newUser;
      return true;

    }
    return false;
  }


  addUser(user: User) {
    user.id = UserService.id++;
    UserDb.users.push(user);
  }

  isExist(username: string): boolean {
    return UserDb.users.some(user => user.username === username);
  }
}
