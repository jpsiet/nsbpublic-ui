import {
  ChangeDetectionStrategy,
  Component,
  OnInit
} from '@angular/core';
import { DataObservableService } from '../data_observable';
import * as _ from 'lodash';

@Component({
  selector: 'ng-for-parent',
  templateUrl: './ng-for-parent.component.html',
  styleUrls: ['./ng-for-parent.component.scss']

})
export class NgForParent  implements OnInit{
  dataLists = [{ name: 'Item 1',  order:[1,2,3] }, { name: 'Item 2', order:[1,2,3,4]},
    { name: 'Item 3', order:[1,4]}
   , { name: 'Item 4', order:[1]}
  ];
  dataList = [
    { name: 'Item 1', order:[1]}
  ];

  constructor(private dataObs:DataObservableService){
     }


  ngOnInit(): void {
    console.log("creating ng for parent compponent");
  }


  handleUpdateData(){
    const random = Math.ceil(Math.random() * 3 + 1) ;
    //this.dataList= this.dataLists.filter( item => item.order ==random);

    console.log(' items data random nmber', random);

    //reference change will force every time new component ,
    // other option also can be by trackBy dirctive of angular with Ng for
    // if unique id logic
   this.dataList= _.cloneDeep(this.dataLists.filter( item => item.order.length ==random));
}

handleConfigData(){
  const random = Math.ceil(Math.random() * 10 + 1) ;
  this.dataObs.sendData({ order: random, name: 'config' + random });
}


trackById(index:any, item:any){

  // every time will create new component weather chaning child componnt data or list data
  // so no real time use
  //  if want to recreate  component with only list data changes not component it's self
  //  data changed then w diff reference of list data logic
  const random = Math.ceil(Math.random() * 10000 + 1) ;
  return random;
}



}
