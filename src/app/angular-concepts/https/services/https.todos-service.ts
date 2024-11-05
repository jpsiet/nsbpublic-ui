import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Person } from '../../interfaces/person';



@Injectable({
  providedIn: 'root'
})
export class HttpsToDoService {

  constructor(private http: HttpClient) { }

  getToDOService(): Observable<Person[]> {
    return this.http.get<Person[]>('https://jsonplaceholder.typicode.com/todos');
  }

  getToDOByIdService(): Observable<Person> {
    return this.http.get<Person>('https://jsonplaceholder.typicode.com/todos/1');
  }

  getTCourse(): Observable<any> {
    return this.http.get<any>('http://localhost:8080/course');
  }
}
