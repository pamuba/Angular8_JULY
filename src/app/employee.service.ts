import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  getEmployees(){
    return [
      {"id":1, "name":"John", age:38},
      {"id":2, "name":"Jim", age:23},
      {"id":3, "name":"Mary", age:55},
      {"id":4, "name":"Andrew", age:45},
      {"id":5, "name":"Elena", age:29},
    ]
  }

  constructor() { }
}
