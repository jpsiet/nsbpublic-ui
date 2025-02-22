import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataObservableService {

  constructor() { }

  private dataSubject = new Subject<any>();
  data$ = this.dataSubject.asObservable();
  sendData(data: any) {
    this.dataSubject.next(data);
}
    // handleChangeConfigData() {
    //   const random = Math.ceil(Math.random() * 10);
    //   this.config.next({ id: random, name: 'config' + random });
    // }

    // handleMatchData() {
    //   const random = 5;
    //   this.config.next({ id: random, name: 'config' + random });
    //   this.weights.next({ id: random, name: 'weight' + random });
    // }

    // handleChangeWeightData() {
    //   const randomW = Math.ceil(Math.random() * 10);
    //   this.weights.next({ id: randomW, name: 'weight' + randomW });
    // }
}
