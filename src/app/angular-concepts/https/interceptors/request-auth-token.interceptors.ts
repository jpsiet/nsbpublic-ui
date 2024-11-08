import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RequestAuthTokenIntercptors implements HttpInterceptor {

  intercept(request:HttpRequest<any>,next:HttpHandler):Observable<HttpEvent<any>>{

    console.log("%cprocessing Auth Token request =>" + request, "color:blue");
    return next.handle(request);

  }

}
