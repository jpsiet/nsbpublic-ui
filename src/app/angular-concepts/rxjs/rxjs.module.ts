import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AngularWithRxjsComponent } from './angular-with-rxjs/angular-with-rxjs.component';
import { RxJxRotuingModule } from './rxjs-route.module';
import { RxjsContComponent } from './rxjs-cont.component';



@NgModule({
  declarations: [
    AngularWithRxjsComponent,
    RxjsContComponent
  ],
  imports: [
    CommonModule,
    RxJxRotuingModule
  ]
})
export class RxjsModule { }
