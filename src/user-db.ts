import {User} from "./app/models/user.model";

export class UserDb {
  static users: User[] = [
    {
      id: 1,
      username: 'Haridy29',
      password: '1234567',
      firstName: 'Mohamed',
      lastName: 'Haridy',
      email: 'mohamed.haridi.14@gmail.com',
      phoneNumber: '01156251152',
      department: {
        id: 6,
        name: "IT"
      }

    },
    {
      id: 2,
      username: 'Harhad',
      password: '1234567',
      firstName: 'Mohamed',
      lastName: 'Ali',
      email: 'mohamed.haridy@kites-software.com',
      phoneNumber: '01159046151',
      department: {
        id: 6,
        name: "IT"
      }
    }

  ]


}
