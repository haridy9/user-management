import {Injectable} from '@angular/core';
import {Department} from "../../models/Department";


@Injectable({
    providedIn: 'root'
  }
)
export class DepartmentService {
  departments: Department[] = [];

  constructor() {
    this.loadFromFile();
  }


  loadFromFile(): Department[] {
    if (this.departments.length == 0) {
      this.departments = require('../../../assets/Dept.json');
    }
    return this.departments;
  }

  findById(id: number) {
    return this.departments.find(dept => dept.id == id);
  }

}
