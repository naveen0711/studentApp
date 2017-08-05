import { Component, OnInit } from '@angular/core';
import { Student } from '../students'
import { StudentService } from '../student.service';
@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css'],
  providers: [StudentService]
})
export class StudentComponent implements OnInit {
  student: Student[];
  Fname: string;
  Lname: string;
  Age: number;
  Gender: string;
  RollNumber: string;
  submitted = false;
  constructor(private studService: StudentService) { }
  onSubmit() { this.submitted = true; }

  ngOnInit() {
    this.studService.getStudentDetails()
      .subscribe(data => {
        this.student = data;
      });
  }
  addnewStudent() {
    //console.log('add new Student');
    const newstudent = {
      Fname: this.Fname,
      Lname: this.Lname,
      Age: this.Age,
      Gender: this.Gender,
      RollNumber: this.RollNumber
    }
    this.studService.addStudentDetails(newstudent)
      .subscribe(student => {
        this.student.push(student);
        this.ngOnInit();
      });
    //console.log('Contact added to db');
    console.log(newstudent)
    this.onSubmit();
  }
}
