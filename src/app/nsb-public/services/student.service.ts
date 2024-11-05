import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { MatDialog } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { Student } from 'src/generated/model/student';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  baseUrl = 'http://localhost:8080/';



  constructor(private http: HttpClient,public dialog: MatDialog) { }

  openStudentDialog(data:any=null,dailogComponent:any){
    return  this.dialog.open(dailogComponent, {
      data: data,
    });

  }

  getStudentList():Observable<Array<Student>>{
    const url = this.baseUrl+ 'students' ;
    return this.http.get<Array<Student>>(url);
  }

  deleteStudentsByID( id:number){
    const url = this.baseUrl+ 'delete-student-id?id=' + id;
    return this.http.get(url);
  }

  addStudent(student:{name:string}){
    const url = this.baseUrl+ 'add-student' ;
    return this.http.post(url,student);
  }
}
