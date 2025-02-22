import { ChangeDetectionStrategy, Component, Input, OnInit } from "@angular/core";
import { DataObservableService } from "../data_observable";


@Component({
  selector: 'ng-for-child-one',
  templateUrl: './ng-for-child-one.component.html',
  styleUrls: ['./ng-for-child-one.component.scss'],
   changeDetection:ChangeDetectionStrategy.OnPush

})
export class NgForChildOne implements OnInit
  {


    compCont = 0;
    @Input() data: any;
    config:any = {order:1,name:1};
   constructor( private dataObs:DataObservableService){}




    ngOnInit( ): void {
      console.log("creating ng for child compponent");
      this.dataObs.data$.subscribe( data =>{
        this.config=  data
      })
    }



    handleUpdate()
    {
      this.compCont = this.compCont+1;
    }

  }
