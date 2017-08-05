import { Injectable } from '@angular/core';
import { Student } from './students';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
@Injectable()
export class StudentService {

  constructor(private http: Http) { }
  // retreiving details
  getStudentDetails() {
    return this.http.get('http://localhost:3000/student')
      .map((res) => res.json());
  }
     // add StudentDetails
  addStudentDetails(newStudent) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json')
    return this.http.post('http://localhost:3000/student', newStudent)
      .map(res => res.json());
  }

  // delete StudentDetails
  deleteStudentDetails(id) {
    return this.http.delete('http://localhost:3000/student/' + id)
      .map(res => res.json());
  }

  //update StudentDetails

  updateStudentDetails(id, updstudent) {
    return this.http.put('http://localhost:3000/student/' + id, updstudent)
      .map(res => res.json());
  }
}
