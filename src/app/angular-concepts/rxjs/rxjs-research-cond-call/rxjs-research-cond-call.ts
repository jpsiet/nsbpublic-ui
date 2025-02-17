import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  Type,
  ViewChild,
} from '@angular/core';
import { fromEvent, interval, of, Subject, Subscription } from 'rxjs';
import {
  debounceTime,
  filter,
  map,
  mapTo,
  mergeMap,
  scan,
  share,
  shareReplay,
  startWith,
  switchMap,
  takeUntil,
} from 'rxjs/operators';

 type ConfgiType =  {
   id:number,
   name:string
}
type WeightType =  {
  id:number,
  name:string
}

@Component({
  selector: 'rxjs-research-cond-call',
  templateUrl: './rxjs-research-cond-call.html',
  styleUrls: ['./rxjs-research-cond-call.scss'],
})
export class RxjsResearchCondCall implements OnInit {

 config:Subject<ConfgiType> = new Subject<WeightType>();
 weights: Subject<WeightType> = new Subject<WeightType>();

 handleConfigData(){
  debugger
  const random = Math.ceil(Math.random()*1000);
  this.config.next({id:random, name:'config'+ random});

  const randomW = Math.ceil(Math.random()*1000);
  this.weights.next({id:randomW, name:'weight'+ random});
 }

 ngOnInit(): void {
  debugger

  this.config.pipe(
    switchMap(val => {
      debugger
       return [ of(val), this.weights.pipe()]
    }),
    filter( val => {
      console.log(val);
      debugger;
      return true;
    })
  ).subscribe(
    val => {
      console.log(val);
    }
  )

 }


}
