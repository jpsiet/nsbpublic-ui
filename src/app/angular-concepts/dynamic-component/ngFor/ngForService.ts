import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ngForService {



  getStateAndListData(  data:any, view="AA"){

  }

  constructor(private http:HttpClient){

  }

    callUserService(reqest:any){
    return this.http.post('https://jsonplaceholder.typicode.com/posts', {
           method: 'POST',
           body: JSON.stringify(reqest),
           headers: {
             'Content-type': 'application/json; charset=UTF-8',
           },
         })
    }
}
