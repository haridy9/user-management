import {Department} from "./Department";

export interface User {
  id: number;
  username: string;
  password: string;
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  department: Department;
}
